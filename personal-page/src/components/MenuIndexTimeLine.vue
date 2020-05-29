<template>
    <div>
    <v-sheet class="filterField pa-1 lighten-2">
      <v-text-field class="textFilter"
        v-model="search"
        :label="language.search[culture]"
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
    </v-sheet>
    
      <v-treeview class="tree"
        :items="items"
        :search="search"
        :filter="filter"
        :open="open"
        open-on-click
      >
      <template v-slot:label="{ item }">
          <div @click="NavegateTo(item)">
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
            return this.language.yearOf[this.culture] + " " + history.date.getFullYear() + " | " + this.state.months[this.state.culture][history.date.getMonth()] + " - " + history.title[this.culture];
        },
        getTitleYear(year)
        {   
            return this.language.yearOf[this.culture] + " " + year.year
        },
        NavegateTo(item){
            if(item.children.length === 0)
            {
                this.scrollMeTo(item.id);
            }

            if(this.isMobile())
            {
                this.$emit("closeMenu");
            }
        }
    },
    mounted() {

        let items = [];
        let years = this.state.years;

        years.forEach(year => {
            let histories = this.getHistory(year.year);
            
            histories = histories.map(history => { return {
              id: this.getID(history),
              name: this.getTitle,
              object: history,
              image: history.image,
              color: history.category.color,
              children: []
            }});

            let item = {
              id: year.year,
              name: this.getTitleYear,
              object: year,
              icon: "mdi-clock",
              color:"pink",
              children: histories};

            this.open.push(year.year);

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

.textFilter{
    font-size: small;
}
</style>