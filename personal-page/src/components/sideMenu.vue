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
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
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
    import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        data() {
            return {
                drawerRight: null,
                miniVariant: true,
            }
        },
        computed: {

        },
        methods: {
            action(category)
            {  
                let categories = Object.entries(this.state.categoryType);
                categories.map(x => 
                {  
                    x[1].enable = (x[1].name[this.culture] == category.name[this.culture] || x[1].pinned);
                    x[1].showItems = (x[1].name[this.culture] == category.name[this.culture]);

                });

                this.scrollToTop();
            },
            getMenuWidth()
            {
              if(this.isMobile())
              {
                return "100%";
              }
              else
              {
                return "300";
              }
            },
            pin(category)
            {
                category.pinned = !category.pinned;
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
  }
</style>