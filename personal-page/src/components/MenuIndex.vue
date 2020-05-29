<template>
    <div>
        <div v-if="state.showLeftMenu" class="custom_overlay" @click="state.showLeftMenu = !state.showLeftMenu"></div>
           <v-tooltip right v-if="!state.showLeftMenu">
              <template v-slot:activator="{ on }">
                 <v-btn small  color="blue darken-2" dark class="filter" v-if="!state.showLeftMenu" v-on="on" @click="toggleMenu()" >
                    <v-icon  size="20px">{{getIcon()}}</v-icon>
                </v-btn>
              </template>
              <span>{{ getIconTitle() }}</span>
            </v-tooltip>
            

<v-navigation-drawer class="menu"
      v-model="state.showLeftMenu"
      app
      :width="getMenuLeftWidth()"
      clipped
      temporary
      stateless
      :permanent="state.showLeftMenu"
    >
    <MenuIndexItem :items="this.state.itemsResume" :open="state.itemsResumeOpen" @closeMenu="closeMenu" v-if="isTimeLineActive()"></MenuIndexItem>
    <MenuIndexItem :items="this.state.itemsTimeLine" :open="state.itemsTimeLineOpen" @closeMenu="closeMenu" v-else></MenuIndexItem>
    


</v-navigation-drawer>
            
    </div>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'
import MenuIndexItem from './../components/MenuIndexItem.vue'
    
    export default {
        mixins:[generalMixins],
        components:{MenuIndexItem},
        data() {
            return {
                
                //document.getElementsByClassName("v-overlay__scrim")
            }
        },
        methods: {
            toggleMenu(){
                this.state.showLeftMenu = !this.state.showLeftMenu;
            },
            closeMenu(){
                this.state.showLeftMenu = false;
            },
            isTimeLineActive(){
                return this.$router.currentRoute.name === "Resume";
            },
            getIcon()
            {
                if(this.state.showLeftMenu)
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
                if(this.state.showLeftMenu)
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
    left: -15px;
    width: 50px;
    opacity: 0.4;
    top:55px;
    transition-duration: 0.5s;
    transition-property: width;
  }

   .filter:hover{
    width: 70px;
    opacity: 0.8;
  }

  .menu{
      overflow-y: hidden;
    width: 100%;
    transition-duration: 0s;
    
  }

  .custom_overlay {
    position: fixed;
    height: 110vh;
    width: 100%;
    z-index:7;
    top:-20px;
}
</style>