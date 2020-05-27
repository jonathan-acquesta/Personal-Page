<template>
    <div>

        

            <v-tooltip left >
              <template v-slot:activator="{ on }">
                 <v-btn icon class="filter" v-on="on" >
                    <v-icon  size="24px" @click="toggleFilterMenu()">mdi-filter-menu</v-icon>
                </v-btn>
              </template>
              <span>{{ language.filterTags[culture] }}</span>
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
import generalMixins from './../mixins/generalMixins.js'

    export default {
        mixins:[generalMixins],
        data() {
            return {
              showFilterMenu: false,
              panel: 0,
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
            getTotalItems(group)
            {
                let totalSelected = this.getTotalSelectedItems(group);
                
                let result = "Total de " + Object.entries(group.tags).length + "#"; 
                if(totalSelected !== 0){
                  result += " com " + totalSelected + " selecionados";
                }

                return result
            },
            getTotalSelectedItems(group)
            {
                return Object.entries(group.tags).filter(q => q.show == true).length; 
            },
            showAllCategories()
            {
                Object.values(this.tagGroups).forEach(x => Object.values(x.tags).forEach(q => q.show = false));
                this.showFilterMenu = false;
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