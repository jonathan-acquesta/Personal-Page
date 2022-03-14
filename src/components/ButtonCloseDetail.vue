<template>
    <v-tooltip left v-show="history.showDetail">
        <template v-slot:activator="{ on }">
        <v-btn v-show="history.showDetail"
            class=" showDetailsUp"
            v-on="on"
            icon
            v-on:click="history.showDetail = false">
            <v-icon color="pink" size="24px">mdi-upload</v-icon>
        </v-btn>
        </template>
        <span>{{ language.closeDetails[culture]}}</span>
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
.showDetailsUp
{
  float: right;
  margin-right: 10px;
  margin-top: -20px;
}
</style>