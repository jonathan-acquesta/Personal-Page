<template>
    <div>
      <div class="tagArea">
        <v-chip dark small color="black" class="tags" @click="activeAllTags()">
                    {{ language.allTag[culture] }}
        </v-chip>
        <v-chip  dark small class="tags" @click="activeInProgressTag()">
                    {{ language.justInProgressTag[culture] }}
        </v-chip>
        <span v-if="getActiveTags.length > 0" :class="`filterTitle font-weight-bold`"
                  v-text="' | '"></span>
        <v-chip small dark :color="tag.group.color" close class="tags" v-for="(tag, index) in getActiveTags" :key="index" @click:close="remove(tag)">
                    {{ tag.name[culture] }}
        </v-chip>

      </div>
    </div>
</template>

<script>
import historyMixins from './../mixins/historyMixins.js'

    export default {
        
        mixins:[historyMixins],
        data() {
            return {
                tagsToFilter: [{'en-US': 'Teste'}],
            }
        },
        computed: {
          getActiveTags()
          {
            let tagsSelected = [];

            Object.values(this.tagGroups).forEach(group => {
                tagsSelected = tagsSelected.concat(Object.values(group.tags).filter(tag => tag.show));
            });

            return tagsSelected;
          }
        },
        methods: {
            activeAllTags(){
              Object.values(this.tagGroups).forEach(x => Object.values(x.tags).forEach(q => q.show = false));
                this.state.tagsActive = [];
                //this.state.showFilterMenu = false;
                
                this.updateQuickFilter();
            },
            activeInProgressTag(){
                let inProgressTag = undefined;
                Object.values(this.tagGroups).forEach(x => Object.values(x.tags).forEach(tag => 
                { 

                  if(tag.id === 3000)
                  {
                    inProgressTag = tag;
                    tag.show = true;
                  }
                  else
                  {
                    tag.show = false;
                  }
                }));

                this.state.tagsActive = [inProgressTag];
                //this.state.showFilterMenu = false;
                
                this.updateQuickFilter();
            },
            remove (tag) {
                tag.show = false;
               
                this.state.tagsActive = this.state.tagsActive.filter(x => x.id !== tag.id);

                this.updateQuickFilter();
            }
        },
    }
</script>

<style scoped>
  .tagArea{
    background-color: white;
    min-height: 35px;
    width: 100%;
    border-style:double;
    border-width: 1px;
    border-color: #f3f3f3;
  }

  .tags{
    margin: 4px;
    cursor: pointer;
  }
</style>