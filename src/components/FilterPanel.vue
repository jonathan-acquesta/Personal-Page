<template>
    <div class="FilterTagsFull" >


  <div class="titleTags">
      
      <v-item-group
        class="text-center"
        mandatory
      >
        <v-item
          v-for="(group, index) in tagGroups" :key="index"
          
        >
            <span @click="changeMenu(group)" :class="getTitleClass(group)"> {{group[culture]}}</span>
        </v-item>
      </v-item-group>
    
    </div>
    <FilterTags class="filterTags" />
    
      <div 
        v-for="(group, index) in tagGroups" :key="index"
      >
        <div class="tagsBody" v-if="onboarding === group.id">
          
          <div :class="{desactiveTag: tag.show}" class="tagsDiv" v-for="(tag, index) in group.tags" :key="index">
                <span @click="toggleTag(tag)"
                  :class="`tags font-weight-bold ${tag.group.color}--text`"
                  v-text="tag.name[culture]"></span>
                  
              </div>
         
        </div>
      </div>


    





    </div>
</template>

<script>
import historyMixins from './../mixins/historyMixins.js'
import FilterTags from './FilterTags'

    export default {
        mixins:[historyMixins],
        components:{FilterTags},
        data() {
            return {
              panel: 0,
              onboarding: 0,
            }
        },
        computed: {
          getIconFilter()
          {
            if(this.state.showFilterMenu)
            {
              return "mdi-filter-menu-outline";
            }
            else
            {
              return "mdi-filter-menu";
            }
          },
          getTitleFilter()
          {
            if(this.state.showFilterMenu)
            {
              return this.language.filterTagsClose[this.culture];
            }
            else
            {
              return this.language.filterTags[this.culture];
            }
          }


        },
        methods: {
            changeMenu(group){
              if(this.onboarding == group.id)
              {
                this.onboarding = 0;
              }
              else
              {
                this.onboarding = group.id;
              }
            },
            toggleFilterMenu()
            {
              this.state.showFilterMenu = !this.state.showFilterMenu;
            },
            toggleTag(tag)
            {
              tag.show = !tag.show;

              if(tag.show){
                this.state.tagsActive.push(tag);
              }
              else{
                this.state.tagsActive = this.state.tagsActive.filter(x => x.id !== tag.id);
              }

              this.updateQuickFilter();
            },
            getTitleClass(group)
            {
                let result = `tagsTitle font-weight-bold ${group.color}--text`; 

                if(this.onboarding === group.id)
                {
                  result = "tagsTitleSelected " + result;
                }

                return result
            },
            showAllCategories()
            {
                Object.values(this.tagGroups).forEach(x => Object.values(x.tags).forEach(q => q.show = false));
                this.state.tagsActive = [];
                this.state.showFilterMenu = false;
                
                this.updateQuickFilter();
            }
        },
    }
</script>

<style scoped>

.tagsBody{
  padding-left: 5px;
  text-align: center;
  border-style: double;
  border-color: #f3f3f3;
}

.titleTags{
  text-align: center;
  width: 100%;
  margin: 5px;
}

.filterTitle{
  color: rgb(100, 100, 100);
  font-size: large;
  margin-top:3px;
  float: right;
}

.clearTags{
  float: right;
  margin-top: -2px;
  margin-right: -3px;
}

.tagsGroups{
  top:0px;
}

  .filter{
    float: right; 
  }

  .FilterTagsFull{
    
    z-index: 9990;
  
    
  }

  .mainCard{
    margin: 10px;
    padding: 10px;
  }

  .desactiveTag{
    filter: brightness(120%);
    opacity: 0.6;
  }

  .tagCard{
    max-width: 200px;
  }

.tags {
  margin-right: 10px;
  font-size: small;
  
  cursor: pointer;
}

.tagsTitle{
  margin-right: 10px;
  font-size: small;
  
  cursor: pointer;
}

.tagsTitle:hover{
  filter: brightness(120%);
  opacity: 0.6;
}

.tagsTitleSelected{
  filter: brightness(120%);
  opacity: 0.6;
}

.tags:hover{
  filter: brightness(120%);
}

.totalTags{
  min-width: 100px;
  font-size: small;
}

.tagsDiv{
  display:inline-block;
  text-align: center;
}

.tagGroups{
  margin: 0px;
}

.headerGroup{
  text-align: left;
}

.filterTags{
  top:0px;
}

.tagArea{
  max-height: 270px;
  overflow: auto;
  border-style:double;
    border-width: 1px;
    border-color: #f3f3f3;
}
</style>