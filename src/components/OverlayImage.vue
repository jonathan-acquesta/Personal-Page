<template>
    <div>
        <v-overlay class="overlay" :value="getOverlay">
            <v-btn icon @click="setOverlay(false)">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="imageLink">
                <v-img v-if="!isMobile()" class="descriptionImageLink" :src="getMainImage" @click="setOverlay(false)"></v-img>
                <v-img v-else class="descriptionImageLinkMobile" :src="getMainImage" @click="setOverlay(false)"></v-img>
            </div>
        </v-overlay>
    </div>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'

    export default {
        name:'OverlayImage',
        mixins:[generalMixins],
        computed: {
            getOverlay()
            {
                return this.$store.state.overlay;
            },
            getMainImage()
            {
                return this.$store.state.mainImage;
            },
        },
        methods: {
            setOverlay(value)
            {
                this.$store.state.overlay = value;
            }
        },
    }
</script>

<style scoped>

.descriptionImageLink {
  width: 80%;
  margin-left: 10%;
  max-width: 1000px;
  text-align: center;
}

.descriptionImageLinkMobile {
  width: 80%;
  margin-left: 10%;
  max-width: 500px;
  text-align: center;
}

.imageLink{
  text-align: center;
  max-height: 600px;
  overflow: visible;
}

.overlay {
  text-align: center;
}
</style>