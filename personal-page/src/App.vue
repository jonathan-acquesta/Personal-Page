<template>
  <v-app>
    <div class="nav-bar"></div>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>

<style>
.nav-bar {
    background: linear-gradient(-90deg, rgb(144, 75, 255), rgb(15, 138, 253));
    height: 60px;
    margin-bottom: 15px;
}

</style>

