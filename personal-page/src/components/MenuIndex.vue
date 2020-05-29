<template>
    <div>
           <v-tooltip right v-if="!showMenu">
              <template v-slot:activator="{ on }">
                 <v-btn icon class="filter" v-if="!showMenu" v-on="on" @click="toggleMenu()" >
                    <v-icon  size="24px">{{getIcon()}}</v-icon>
                </v-btn>
              </template>
              <span>{{ getIconTitle() }}</span>
            </v-tooltip>
            

<v-navigation-drawer class="menu"
      v-model="showMenu"
      app
      :width="getMenuLeftWidth()"
      clipped
      temporary
      stateless
      :permanent="showMenu"
    >
    <menu-index-resume @closeMenu="closeMenu" v-if="isTimeLineActive()"></menu-index-resume>
    <menu-index-time-line @closeMenu="closeMenu" v-else ></menu-index-time-line>
    


</v-navigation-drawer>
            
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
                showMenu: false
            }
        },
        methods: {
            toggleMenu(){
                this.showMenu = !this.showMenu;
            },
            closeMenu(){
                this.showMenu = false;
            },
            isTimeLineActive(){
                return this.$router.currentRoute.name === "Resume";
            },
            getIcon()
            {
                if(this.showMenu)
                {
                    return "mdi-backburger";
                }
                else
                {
                    return "mdi-forwardburger";
                }
            },
            getIconTitle()
            {
                if(this.showMenu)
                {
                    return this.language.closeQuickAccess[this.culture];
                }
                else
                {
                    return this.language.quickAccess[this.culture];
                }
            }
            
        },
        
    }
</script>

<style scoped>
 .filter{
    float: left;
    position: fixed;
    z-index: 9999;
  }

  .menu{
    width: 100%;
    transition-duration: 0s;
    
  }
</style>