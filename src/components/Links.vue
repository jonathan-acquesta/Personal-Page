<template>
    <div
        class="links"
        v-if="(history.links)">
        <span>Links: </span>
        <a v-for="(link, index) in history.links" :key="index"
        v-if="history.links"
        class="linkShow"
        v-on:click="processLink(link)"><br v-if="isMobile()">{{ link.description[culture] }}
        </a>
    </div>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js';

    export default {
        name:'Links',
        mixins:[generalMixins],
        props:["history"],
        methods: {
            processLink(link){
                if(link.type == "certificate")
                {
                    this.$store.state.overlay = true; 
                    this.$store.state.mainImage = link.image;
                }
                else
                {
                    this.openSite(link.url);
                }
            }
        },
    }
</script>

<style scoped>
.links {
  color: rgb(10, 10, 32);
  font-size:small;
  margin-top: 15px;
  margin-left: 5px;
}

.linkShow {
  font-size:small;
  margin: 4px;
}

</style>