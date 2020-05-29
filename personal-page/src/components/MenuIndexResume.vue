<template>
    <div>
    <v-sheet class="filterField pa-1 lighten-2">
        
<v-text-field
        class="search"
        v-model="search"
        :label="language.search[culture]"
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
          
                <v-tooltip right >
              <template v-slot:activator="{ on }">
                 <v-btn icon class="filter" v-on="on" @click="close()" >
                    <v-icon  size="24px">mdi-backburger</v-icon>
                </v-btn>
              </template>
              <span>{{ this.language.closeQuickAccess[this.culture] }}</span>
            </v-tooltip>
            
      
      
    </v-sheet>
    
      <v-treeview class="tree"
        :items="items"
        :search="search"
        :filter="filter"
        :open="open"
        open-on-click
      >
      <template v-slot:label="{ item }" >
          <div class="divName" @click="NavegateTo(item)">
          {{ item.name(item.object) }}
          </div>
      </template>
        <template v-slot:prepend="{ item }">
          <v-icon v-if="item.icon" :color="item.color" @click="NavegateTo(item)"
          >{{item.icon}}</v-icon>
           <v-img v-else @click="NavegateTo(item)"
                
                class="descriptionImageMin"
                width="22"
                :src="item.image"
                ></v-img>
        </template>
      </v-treeview>
    
  </div>
</template>

<script>
import historyMixins from './../mixins/historyMixins.js'

    export default {
        mixins:[historyMixins],
        data() {
            return {
                items: [ ],
                open:[],
                search: null,
            }
        },
    computed: {
      filter () {
        return (item, search, textKey) => item[textKey](item.object).toUpperCase().indexOf(search? search.toUpperCase(): search) > -1;
      },
    },
    methods: {
        getTitle(history)
            {
                return this.language.yearOf[this.culture] + " " + history.date.getFullYear() + " - " + history.title[this.culture];
            },
            getCategory(category){
                return category.name[this.culture]
            },
        NavegateTo(item){
            if(item.children.length === 0)
            {
                this.scrollMeTo(item.id);
            }

           
                this.$emit("closeMenu");
            
        },
        close()
        {
            this.$emit("closeMenu");
        },
    },
    mounted() {

        let items = [];
        let categories = Object.values(this.$store.state.categoryType);

        categories.forEach(category => {
            let histories = this.getHistotyByCategory(category);
            
            histories = histories.map(history => { return {
              id: this.getID(history),
              name: this.getTitle,
              image: history.image,
              color: category.color,
              object: history,
              children: []
            }});

            let item = {
              id: category.id,
              name: this.getCategory,
              icon: category.icon,
              color: category.color,
              object: category,
              children: histories};

            this.open.push(category.id);

            items.push(item);
        });

        this.items = items; 


    },
    }
</script>

<style scoped>
.filterField{
    border-radius: 0%;
}

.tree{
    margin-left: -5px;
    font-size: small;
}

.divName{
    height: 40px;
    width: 100%;
    margin: 0px;
    padding-top: 10px;
    padding-left: 5px;
}

.filter{
    float: right;
    margin-top:-35px;
}

.search{
    width: 90%;
}
</style>