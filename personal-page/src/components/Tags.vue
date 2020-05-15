<template>
    <div class="tagsDiv">
      <v-chip
        class="tags"
        color="white"
        label
        :text-color="tag.color"
        v-for="(tag, index) in tags"
        :key="index"
      >
        <b>{{ tag[culture] }}</b>
      </v-chip>
    </div>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'

    export default {
      name:'Tags',
      props:['tags'],
      mixins:[generalMixins]
        
    }
</script>

<style scoped>
.tagsDiv {
  margin-left: -10px;
}

.tags {
  margin-right: -10px;
}

</style>