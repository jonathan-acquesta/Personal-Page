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
          <v-icon  size="24px" @click="openSite('https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422/')">fab fa-linkedin</v-icon>
        </v-btn>
    <v-toolbar-title style="margin-left:-15px;">Jonathan Caravaggio Acquesta - Agile Coach - PSM I</v-toolbar-title>
    <v-spacer />
    <Language></Language>
    </v-app-bar>

    <SideMenu></SideMenu>

    <v-content>
      <v-container class="fill-height" fluid>
       <router-view />
      </v-container>
    </v-content>

   <Footer></Footer>


  </v-app>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import Language from "./components/Language.vue";
import Footer from "./components/Footer.vue";
import Timeline from "@/views/Timeline.vue";
import Resume from "@/views/Resume.vue";
import generalMixins from './mixins/generalMixins.js'

  export default {
    mixins:[generalMixins],
    props: {
      source: String,
    },
    components: {
      Timeline, Resume, SideMenu, Language, Footer
    },
    data: () => ({
      drawer: null,
      right: false,
      left: false,
    }),
    computed: {
     
    },
    methods: {
     
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
