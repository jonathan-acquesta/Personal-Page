<template>
  <v-app>
    <div class="nav-bar">
      <img class="language" src="./assets/logo.png" title="português" v-on:click="ChangeLangue('pt-BR')" />
      <img class="language" src="./assets/logo.png" title="inglês"  v-on:click="ChangeLangue('en-US')" />
    </div>
    <!--<Menu></Menu>-->
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";
//import Menu from "./components/menu";

export default {
  name: "App",

  components: {
    Home, 
    //Menu
  },

  data: () => ({
    //
  }),
  methods: {
    ChangeLangue(language)
    {
      this.$store.state.culture = language;
    }
  },
};
</script>

<style>
.nav-bar {
    background: linear-gradient(-90deg, rgb(202, 202, 202), rgb(145, 158, 170));
    height: 60px;
    margin-bottom: 15px;
}

.language{
  width: 48px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 3px;
  cursor: pointer;
}

</style>

