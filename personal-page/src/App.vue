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
    
        <v-btn icon>
          <v-icon  size="24px" @click="openLinkedIn('https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422/')">fab fa-linkedin</v-icon>
        </v-btn>
    <v-toolbar-title style="margin-left:-15px;">Jonathan Caravaggio Acquesta - Agile Coach - PSM I</v-toolbar-title>
    <v-spacer />
    <label class="language" src="./assets/brazil.jpg" :class="{languageDisactive: this.$store.state.common.languages.portuguese.language !== culture}" :title="this.$store.state.common.languages.portuguese[culture]" v-on:click="ChangeLanguePortuguese()" >PT</label>
    <label class="languageSeparator">|</label>
    <label class="language" src="./assets/usa.jpg" :class="{languageDisactive: this.$store.state.common.languages.english.language !== culture}" :title="this.$store.state.common.languages.english[culture]"  v-on:click="ChangeLangueEnglish()">EN</label>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <Home />
      </v-container>
    </v-content>

   <v-footer
    class="indigo lighten-1 white--text text-center"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px" @click="openLinkedIn(icon.url)">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>{{this.$store.state.common.portfolio[culture]}}</strong>
      </v-card-text>
    </v-row>
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
        {icon: 'fab fa-linkedin', url:'https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422/'},
        {icon: 'fab fa-github', url:'https://github.com/jonathan-acquesta'},
        {icon: 'fab fa-stack-overflow', url:'https://stackoverflow.com/users/9547421/jonathan-caravaggio-acquesta'},
        {icon: 'fab fa-youtube', url:'https://www.youtube.com/channel/UC9dky_d4FDcHUc13iwA19-w?view_as=subscriber'},
        {icon: 'fab fa-medium', url:'https://medium.com/@jcagames'},
        {icon: 'fab fa-instagram', url:'https://www.instagram.com/jonathan.acquesta/?hl=pt-br'},
        {icon: 'fab fa-facebook', url:'https://www.facebook.com/jonathan.acquesta'},
        {icon: 'fab fa-twitter', url:'https://twitter.com/JonathanCAcques'}
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
      },
      openLinkedIn: function (url) {   
          window.open(url, "_blank");    
      }
    },
  }
</script>

<style>
.language{
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
  opacity: 1;
}

.languageSeparator{
  color: blueviolet;
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
