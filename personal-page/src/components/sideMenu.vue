<template>
    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
      permanent
      expand-on-hover
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

          <v-divider></v-divider>

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
            v-for="(category, index) in this.$store.state.categoryType" :key="index" link v-on:click="invertSelection(category)">
            
            <v-list-item-icon>
              <v-icon :color="category.color" :class="{desactiveCategory: !category.enable}">{{ category.icon }}</v-icon>
            </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title :class="{desactiveCategory: !category.enable}">{{ category.name[culture] }} 
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
            invertSelection(category)
            {
                category.enable = !category.enable;
            }
        },
    }
</script>

<style scoped>
.desactiveCategory{
    opacity: 0.4;
  }
</style>