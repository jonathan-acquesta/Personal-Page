<template>
    <v-app-bar
      app
      clipped-right
      clipped-left
      color="blue darken-2"
      dark
      dense
    >
        <v-btn icon>
          <v-icon  size="24px" @click="openSite('https://github.com/jonathan-acquesta/')">mdi-file-pdf</v-icon>
        </v-btn>
        <v-btn icon class="gitButton">
          <v-icon  size="24px" @click="openSite('https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422/')">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn icon class="gitButton">
          <v-icon  size="24px" @click="openSite('https://github.com/jonathan-acquesta/')">fab fa-github</v-icon>
        </v-btn>
    <v-toolbar-title v-if="!isMobile()" class="title">{{ getTitle() }}</v-toolbar-title>
    <v-toolbar-title v-else class="titleMobile">{{ getTitle() }}</v-toolbar-title>
    <v-spacer />
    <Language @closeLanguage="closeLanguage()" v-if="showLanguage" @mouseout="closeLanguage()"></Language>
        <v-btn icon class="languageButton" >
          <v-icon  size="24px" @click="toggleLanguage()">mdi-earth</v-icon>
        </v-btn>
        <v-btn icon v-if="isMobile()">
          <v-icon  size="24px" @click="toggleMenu()">mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'
import Language from "./Language.vue";

    export default {
        data() {
            return {
                showLanguage: false
            }
        },
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
            },
            toggleMenu()
            {
                this.state.showMobileMenu = !this.state.showMobileMenu;
            },
            toggleLanguage()
            {
                this.showLanguage = !this.showLanguage;
            },
            closeLanguage()
            {
                this.showLanguage = false;
            }
        },
    }
</script>

<style scoped>
    .title{
        margin-left:5px;
        font-size:medium;
    }

    .titleMobile{
        margin-left:5px;
        font-size: 16px;
    }

    .gitButton{
        margin-left: -10px;
    }

    .languageButton{
        margin-right: -10px;
    }
</style>