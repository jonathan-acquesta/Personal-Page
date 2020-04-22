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
     <div class="filter" v-for="(category, index) in this.$store.state.categoryType" :key="index">
      <span v-if="category.enable" :class="`headline enableTitle font-weight-bold ${category.color}--text`" v-text="category.name[culture]" v-on:click="InvertSelection(category)"></span>
      <span v-else :class="`headline disabledTitle font-weight-bold ${category.color}--text`" v-text="category.name[culture]" v-on:click="InvertSelection(category)"></span>
    </div>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
    <img class="language" src="./assets/logo.png" title="português" v-on:click="ChangeLangue('pt-BR')" />
      <img class="language" src="./assets/logo.png" title="inglês"  v-on:click="ChangeLangue('en-US')" />
      
      <v-spacer />
      <v-toolbar-title>Jonathan Caravaggio Acquesta</v-toolbar-title>
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
      app
      color="blue-grey"
      class="white--text"
    >
      <span>Vuetify</span>
      <v-spacer />
      <span>&copy; 2019</span>
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
    computed:{
      culture()
      {
        return this.$store.state.culture;
      },
      tags()
      {
        return this.$store.state.tags;
      }
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
    }),
    methods: {
      ChangeLangue(language)
      {
        this.$store.state.culture = language;
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
</style>
