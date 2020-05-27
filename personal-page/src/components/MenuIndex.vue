<template>
    <div>
           <v-tooltip right >
              <template v-slot:activator="{ on }">
                 <v-btn icon class="filter" v-on="on" >
                    <v-icon  size="24px">mdi-backburger</v-icon>
                </v-btn>
              </template>
              <span>{{ language.quickAccess[culture] }}</span>
            </v-tooltip>
    </div>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'
    
    export default {
        mixins:[generalMixins],
        
    }
</script>

<style scoped>
 .filter{
    float: left;
  }
</style>