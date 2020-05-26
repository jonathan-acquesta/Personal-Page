<template>
    <div class="tagsGroup">
      <div class="tagsDiv" v-for="(tag, index) in tagsData" :key="index">
          <span class="tags" 
            :class="`font-weight-bold ${tag.color}--text`"
            v-text="tag.name[culture]"></span>
            <br v-if="vertical">
        </div>
    </div>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'

    export default {
      name:'Tags',
      props:['tagsData', 'vertical'],
      mixins:[generalMixins]
        
    }
</script>

<style scoped>
.tagsGroup{
  max-width: 800px;
  padding-right: 20px;
}

.tags {
  margin-right: 10px;
  font-size: small;
  white-space: pre;
}

.tagsDiv{
  display: inline;
}

</style>