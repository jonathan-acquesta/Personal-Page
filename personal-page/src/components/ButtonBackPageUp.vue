<template>
    <v-tooltip right>
        <template v-slot:activator="{ on }">
        <v-btn v-show="showUpButtonData"
            :class="getClass"
            v-on="on"
             absolute
              dark
              fab
              bottom
              right
              small
              color="pink"
            v-on:click="UpPage()">
            <v-icon color="white" size="24px">mdi-arrow-up-bold</v-icon>
        </v-btn>
        </template>
        <span>{{ language.upPage[culture]}}</span>
    </v-tooltip>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        data() {
            return {
                showUpButtonData: false
            }
        },
        created () {
            window.addEventListener('scroll', this.showUpButton);
        },
        destroyed () {
            window.removeEventListener('scroll', this.showUpButton);
        },
        computed: {
            getClass(){
                if(this.isMobile())
                {
                    return "showDetailsUpMobile";
                }
                else
                {
                    return "showDetailsUp";
                }
            }
        },
        methods: {
            UpPage()
            {
                this.scrollToTop();
            },
            showUpButton()
            {
                this.showUpButtonData = window.scrollY > 50;
            }
        },
    }
</script>

<style scoped>
.showDetailsUp
{
    position: fixed;
    margin-right: 49.5%;
    margin-bottom: 30px;
  
}

.showDetailsUpMobile
{
    position: fixed;
    margin-right: 0px;
    margin-bottom: 30px;
  
}
</style>