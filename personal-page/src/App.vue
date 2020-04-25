<template>
  <v-app id="inspire">


    

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
    <language></language>
    </v-app-bar>

<sideMenu></sideMenu>

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
import sideMenu from "./components/sideMenu.vue";
import language from "./components/language.vue";

  export default {
    props: {
      source: String,
    },
    components: {
      Home, sideMenu, language
    },
    data: () => ({
      drawer: null,
      right: false,
      left: false,

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
      openLinkedIn: function (url) {   
          window.open(url, "_blank");    
      }
    },
  }
</script>

<style>

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

  
</style>
