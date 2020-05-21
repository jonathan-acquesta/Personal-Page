<template>
    <v-app-bar
      app
      clipped-right
      color="blue darken-2"
      dark
      dense
    >
        <v-btn icon>
          <v-icon  size="24px" @click="openSite('https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422/')">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn icon class="gitButton">
          <v-icon  size="24px" @click="openSite('https://github.com/jonathan-acquesta/')">fab fa-github</v-icon>
        </v-btn>
    <v-toolbar-title class="title">{{ getTitle() }}</v-toolbar-title>
    <v-spacer />
    <Language></Language>
    </v-app-bar>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'
import Language from "./Language.vue";

    export default {
        mixins:[generalMixins],
        components: {Language },
        methods: {
            getTitle()
            {
                if(this.isMobile())
                {
                    return this.language.toolbarTitleMobile[this.culture];
                }

                return this.language.toolbarTitle[this.culture];
            }
        },
    }
</script>

<style scoped>
    .title{
        margin-left:5px;
    }

    .gitButton{
        margin-left: -10px;
    }
</style>