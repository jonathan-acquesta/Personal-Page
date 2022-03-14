<template>
    <v-footer class="indigo lighten-1 white--text text-center" padless>
    <v-row justify="center" no-gutters>
      <v-card-text>
        <v-tooltip bottom v-for="icon in this.$store.state.icons.filter(x => x.showFooter)"
              :key="icon.icon" >
            <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              class="mx-4 white--text"
              icon>
              <v-icon size="24px" @click="openSite(icon.url)">{{ icon.icon }}</v-icon>
            </v-btn>
            </template>
            <span>{{ icon.title[culture] }}</span>
        </v-tooltip>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>{{this.$store.state.common.portfolio[this.$store.state.culture]}}</strong>
      </v-card-text>
    </v-row>
  </v-footer>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        methods: {
            
        },
    }
</script>

<style scoped>

</style>