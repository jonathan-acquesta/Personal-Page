<template>
     <v-tooltip left v-if="history.showDetail !== undefined" v-show="!history.showDetail">
              <template v-slot:activator="{ on }">
                <v-btn v-show="!history.showDetail"
                  class=" showDetails"
                  v-on="on"
                  icon
                  v-on:click="history.showDetail = true"
                >
                  <v-icon color="pink" size="24px">mdi-download</v-icon>
                </v-btn>
              </template>
              <span>{{ language.showDetails[culture]}}</span>
            </v-tooltip>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        props:['history']
    }
</script>

<style scoped>
.showDetails {
  float: right;
  margin-right: 10px;
}
</style>