<template>
    <v-footer class="indigo lighten-1 white--text text-center" padless>
    <v-row justify="center" no-gutters>
      <v-card-text>
        <v-btn
          v-for="icon in this.$store.state.icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon>
          <v-icon size="24px" @click="openSite(icon.url)">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>{{this.$store.state.common.portfolio[this.$store.state.culture]}}</strong>
      </v-card-text>
    </v-row>
  </v-footer>
</template>

<script>
    export default {
        methods: {
            openSite: function (url) {   
                window.open(url, "_blank");    
            }
        },
    }
</script>

<style scoped>

</style>