<template>
    <v-navigation-drawer class="menu"
      v-model="drawerRight"
      app
      :width="getMenuWidth()"
      clipped
      right
      :permanent="!isMobile() || (isMobile() && showMobileMenu())"
      :expand-on-hover="!isMobile()"
    >

    <v-list
          dense
          nav
          style="z-index: 9999;"
          class="py-0"
        >
          <v-list-item style="z-index: 9999;" two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="./../assets/myFace.png">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title ><span class="applicationTitle">{{ this.$store.state.common.applicationTitle[culture]}}</span></v-list-item-title>
            </v-list-item-content>
          </v-list-item>


          <v-list-item
            v-for="(menu, index) in this.$store.state.sideMenu" :key="index" link v-on:click="showPage(menu.url)">
              <v-list-item-icon>
                <v-icon :color="menu.color">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ menu.name[culture] }} 
                </v-list-item-title>
              </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

           <v-list-item link v-on:click="showAll()" class="allItems">
              <v-list-item-icon>
                <v-icon color="black" class="iconAll">mdi-clipboard-check-multiple</v-icon>
              </v-list-item-icon>
                  <v-list-item-content >
                    <v-list-item-title><b>{{ language.all[culture] }}</b> 
                    <v-icon v-if="!getAllPin" class="pin" color="black" size="18px" @click="pinAll(true)">mdi-pin</v-icon>
                    <v-icon v-else color="black" class="pin" size="18px" @click="pinAll(false)">mdi-pin-off</v-icon>
                </v-list-item-title>
              </v-list-item-content>
          </v-list-item>

          <v-divider class="menuDividerAll"></v-divider>

          <v-list-item
            v-for="(category, index) in this.$store.state.categoryType" :key="index" link v-on:click="action(category)">
            
            <v-list-item-icon>
              <v-icon :color="category.color" :class="{desactiveCategory: !category.enable}">{{ category.icon }}</v-icon>
            </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title :class="{desactiveCategory: !category.enable}">{{ category.name[culture] }} 
                    <v-icon v-if="category.pinned" class="pin" color="black" size="18px" @click="pin(category)">mdi-pin</v-icon>
                    <v-icon v-else color="black" class="pin" size="18px" @click="pin(category)">mdi-pin-off</v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

     
    </v-navigation-drawer>
</template>

<script>
    import historyMixins from './../mixins/historyMixins.js'

    export default {
        mixins:[historyMixins],
        data() {
            return {
                drawerRight: null,
                miniVariant: true,
            }
        },
        computed: {
          getAllPin()
          {
              let categories = Object.entries(this.state.categoryType);
              var pinnedItems = 0;
                categories.map(x => 
                {  
                    if(x[1].pinned){
                      pinnedItems++;
                    }
                });

              return pinnedItems == categories.length;
          }
        },
        methods: {
            action(category)
            {  
                let categories = Object.entries(this.state.categoryType);
                categories.map(x => 
                {  
                    x[1].enable = (x[1].id == category.id || x[1].pinned);
                    x[1].showItems = (x[1].id == category.id);

                });

                this.updateQuickFilter();
                this.scrollToTop();
            },
            pin(category)
            {
                category.pinned = !category.pinned;

                this.updateQuickFilter();
            },
            showAll(){
              let categories = Object.entries(this.state.categoryType);
                categories.map(x => 
                {  
                    x[1].enable = true;
                    x[1].showItems = true;

                });

                this.updateQuickFilter();
                this.scrollToTop();
            },
            pinAll(value)
            {
                let categories = Object.entries(this.state.categoryType);
                categories.map(x => 
                {  
                    x[1].pinned = value;
                });

                this.updateQuickFilter();
            }
        },
    }
</script>

<style scoped>
.desactiveCategory{
    opacity: 0.4;
  }

  .pin{
    float: right;
  }

  .menu{
    width: 100%;
    z-index: 9999;
  }
  

  .allItems
  {
    margin-top: 0px;
  }

  .menuDividerAll{
    margin-top: 0px;
    opacity: 0.4;
  }

  .iconAll{
    opacity: 0.8;
  }

</style>