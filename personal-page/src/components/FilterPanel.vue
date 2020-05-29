<template>
    <div class="FilterTagsFull">
            <v-tooltip left >
              <template v-slot:activator="{ on }">
                 <v-btn icon class="filter" v-on="on" >
                    <v-icon  size="24px" @click="toggleFilterMenu()"> {{ getIconFilter }}</v-icon>
                </v-btn>
              </template>
              <span>{{ getTitleFilter }}</span>
            </v-tooltip>
           
        <span v-if="showFilterMenu" :class="`filterTitle font-weight-bold`"
                  v-text="' | ' + language.filterTags[culture]"></span>

            <v-tooltip left v-if="showFilterMenu" >
              <template v-slot:activator="{ on }">
                 <v-btn icon class="clearTags" v-on="on" >
                    <v-icon  size="24px" @click="showAllCategories()">mdi-clipboard-check-multiple</v-icon>
                </v-btn>
              </template>
              <span>{{ language.allTags[culture] }}</span>
            </v-tooltip>
        <br v-if="showFilterMenu">
         <v-expansion-panels v-model="panel" v-if="showFilterMenu" :accordion="true">
          <v-expansion-panel v-for="(group, index) in tagGroups" :key="index">
            <v-expansion-panel-header class="headerGroup"> 
              <span :class="`tags font-weight-bold ${group.color}--text`"> {{group[culture]}}</span>
              <template v-slot:actions>
              <span :class="`tags font-weight-bold ${group.color}--text`"> {{getTotalItems(group)}}</span>

             
            </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>




              <div :class="{desactiveTag: !tag.show}" class="tagsDiv" v-for="(tag, index) in group.tags" :key="index">
                <span @click="toggleTag(tag)"
                  :class="`tags font-weight-bold ${tag.group.color}--text`"
                  v-text="tag.name[culture]"></span>
                  
              </div>

          

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import historyMixins from './../mixins/historyMixins.js'

    export default {
        mixins:[historyMixins],
        data() {
            return {
              showFilterMenu: false,
              panel: 0,
            }
        },
        computed: {
          getIconFilter()
          {
            if(this.showFilterMenu)
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
            if(this.showFilterMenu)
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
            toggleFilterMenu()
            {
              this.showFilterMenu = !this.showFilterMenu;
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
            getTotalItems(group)
            {
                let result = "Total de " + Object.entries(group.tags).length + "#"; 

                return result
            },
            showAllCategories()
            {
                Object.values(this.tagGroups).forEach(x => Object.values(x.tags).forEach(q => q.show = false));
                this.state.tagsActive = [];
                this.showFilterMenu = false;
                
                this.updateQuickFilter();
            }
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

.clearTags{
  float: right;
  margin-top: -2px;
  margin-right: -3px;
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
    filter: brightness(60%);
  }

  .tagCard{
    max-width: 200px;
  }

.tags {
  margin-right: 10px;
  font-size: small;
  
  cursor: pointer;
}

.totalTags{
  min-width: 100px;
  font-size: small;
}

.tagsDiv{
  display:inline-block;
}

.tagGroups{
  margin: 0px;
}

.headerGroup{
  text-align: left;
}

</style>