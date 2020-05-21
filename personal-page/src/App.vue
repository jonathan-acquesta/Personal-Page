<template>
  <v-app id="inspire">
    <Header></Header>
    <SideMenu></SideMenu>
    <OverlayImage></OverlayImage>
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
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Timeline from "@/views/Timeline.vue";
import Resume from "@/views/Resume.vue";
import OverlayImage from "./components/OverlayImage.vue";
import generalMixins from './mixins/generalMixins.js'

  export default {
    mixins:[generalMixins],
    components: {
      Timeline, Resume, SideMenu, Language, Footer, OverlayImage, Header
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
