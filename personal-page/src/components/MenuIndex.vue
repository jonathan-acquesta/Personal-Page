<template>
    <div>
           <v-tooltip right >
              <template v-slot:activator="{ on }">
                 <v-btn icon class="filter" v-on="on" @click="toggleMenu()" >
                    <v-icon  size="24px">mdi-backburger</v-icon>
                </v-btn>
              </template>
              <span>{{ language.quickAccess[culture] }}</span>
            </v-tooltip>

<v-navigation-drawer class="menu"
      v-model="drawerLeft"
      app
      :width="getMenuWidth()"
      clipped
      left
      :permanent="showMenu"
    >
    <menu-index-time-line v-if="isTimeLineActive()"></menu-index-time-line>
    <menu-index-resume v-else></menu-index-resume>


</v-navigation-drawer>
            <!--<v-icon class="filter" color="white"  size="24px">mdi-backburger</v-icon>-->
    </div>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'
import MenuIndexResume from './../components/MenuIndexResume.vue'
import MenuIndexTimeLine from './../components/MenuIndexTimeLine.vue'
    
    export default {
        mixins:[generalMixins],
        components:{MenuIndexTimeLine, MenuIndexResume},
        data() {
            return {
                drawerLeft: null,
                showMenu: false
            }
        },
        methods: {
            toggleMenu(){
                this.showMenu = !this.showMenu;
            },
            isTimeLineActive(){
                return this.state.sideMenuActive === "TimeLine";
            }
        },
        
    }
</script>

<style scoped>
 .filter{
    float: left;
  }

  .menu{
    width: 100%;
    transition-duration: 0s;
    
  }
</style>