<template>
    <div>
      <v-btn icon class="filter" >
          <v-icon  size="24px" @click="toggleFilterMenu()">mdi-filter-menu</v-icon>
        </v-btn>
        
        <span v-if="showFilterMenu" :class="`filterTitle font-weight-bold`"
                  v-text="language.filterTags[culture]"></span>
        <br v-if="showFilterMenu">
        <v-card v-if="showFilterMenu" class="mainCard elevation-2">          
            <div class="py-4 card" v-for="(group, index) in tagGroups" :key="group + index">
              <p
                  :class="`tagGroups font-weight-bold $black--text`"
                  v-text="group[culture]"></p>
              <div :class="{desactiveTag: !tag.show}" class="tagsDiv" v-for="(tag, index) in group.tags" :key="index">
                <span @click="toggleTag(tag)"
                  :class="`tags font-weight-bold ${tag.color}--text`"
                  v-text="tag.name[culture]"></span>
                  
              </div>

            </div>
          </v-card>
    </div>
</template>

<script>
import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        data() {
            return {
              showFilterMenu: false,
            }
        },
        methods: {
            toggleFilterMenu()
            {
              this.showFilterMenu = !this.showFilterMenu;
            },
            toggleTag(tag)
            {
              tag.show = !tag.show;
            },
        },
    }
</script>

<style scoped>
.filterTitle{
  color: rgb(100, 100, 100);
  font-size: large;
  margin-top:3px;
  float: right;
}

  .filter{
    float: right;
  }

  .mainCard{
    margin: 10px;
    padding: 10px;
  }

  .desactiveTag{
    filter: brightness(60%);
  }

  .tagCard{
    max-width: 200px;
  }

.tags {
  margin-right: 10px;
  font-size: small;
  white-space: pre;
  cursor: pointer;
}

.tagsDiv{
  display: inline;
}

.tagGroups{
  margin: 0px;
}
</style>