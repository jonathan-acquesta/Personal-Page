<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
        permanent
      expand-on-hover
    >

    <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="./assets/myFace.png">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title ><span class="applicationTitle">{{ this.$store.state.common.applicationTitle[culture]}}</span></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="(category, index) in this.$store.state.categoryType" :key="index" link v-on:click="InvertSelection(category)">
            
            <v-list-item-icon>
              <v-icon :color="category.color" :class="{desactiveCategory: !category.enable}">{{ category.icon }}</v-icon>
            </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title :class="{desactiveCategory: !category.enable}">{{ category.name[culture] }} 
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

     
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-right
      color="blue darken-2"
      dark
      dense
    >
    <img class="language" src="./assets/brazil.jpg" :class="{languageDisactive: this.$store.state.common.languages.portuguese.language !== culture}" :title="this.$store.state.common.languages.portuguese[culture]" v-on:click="ChangeLanguePortuguese()" />
      <img class="language" src="./assets/usa.jpg" :class="{languageDisactive: this.$store.state.common.languages.english.language !== culture}" :title="this.$store.state.common.languages.english[culture]"  v-on:click="ChangeLangueEnglish()" />
      
      <v-spacer />
      <v-toolbar-title>Jonathan Caravaggio Acquesta - Agile Coach - PSM I</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <Home />
      </v-container>
    </v-content>

   

    <v-footer dark padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Todos os direitos reservados à Jonathan Caravaggio Acquesta Todos os direitos reservados à Jonathan Caravaggio Acquesta Todos os direitos reservados à Jonathan Caravaggio Acquesta Todos os direitos reservados à Jonathan Caravaggio Acquesta Todos os direitos reservados à Jonathan Caravaggio Acquesta
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>{{this.$store.state.common.portfolio[culture]}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
import Home from "./views/Home";
  export default {
    props: {
      source: String,
    },
    components: {
      Home
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
      miniVariant: true,
        icons: [
        'fab fa-linkedin',
        'fab fa-github',
        'fab fa-stack-overflow',
        'fab fa-youtube',
        'fab fa-medium',
        'fab fa-instagram',
        'fab fa-facebook',
        'fab fa-twitter',
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    computed: {
      culture()
      {
        return this.$store.state.culture;
      }
    },
    methods: {
      ChangeLanguePortuguese()
      {
        this.$store.state.culture = this.$store.state.common.languages.portuguese.language;
      },
      ChangeLangueEnglish()
      {
        this.$store.state.culture = this.$store.state.common.languages.english.language;
      },
      InvertSelection(category)
      {
          category.enable = !category.enable;
      }
    },
  }
</script>

<style>
.language{
  cursor: pointer;
  width: 60px;
  margin-right: 10px;
  opacity: 1;
  border-style:solid;
  opacity: 0.9;
  border-color: rgb(255, 255, 255);
}

.languageDisactive{
  opacity: 0.5;
}

  .filter{
    padding: 5px;
  }

  .enableTitle{
    cursor: pointer;
  }

  .disabledTitle{
    opacity: 0.4;
    cursor: pointer;
  }

  .applicationTitle{
    font-weight: bold;
    font-size: large;
    padding-left: 5px;
    color: rgb(1, 32, 71);
  }

  .desactiveCategory{
    opacity: 0.4;
  }
</style>
