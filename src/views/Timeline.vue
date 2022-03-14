<template>
  <div class="timeLine">
    <MenuIndex></MenuIndex>
    <FilterPanel></FilterPanel>
    <div class="text-center"  v-for="(year,index) in getYear" :key="index">
      

        <v-tooltip left  >
              <template v-slot:activator="{ on }">
                <v-btn :class="getClassFirstYear(index)"  outlined color="indigo" v-on="on"  @click="toggleVisibility(year)">{{year.year}}</v-btn>
              </template>
              <span>{{ getButtonYearText(year) }}</span>
            </v-tooltip>


      <TimeLineItem v-if="!isMobile()" v-show="year.show" :histories="getHistory(year.year)"></TimeLineItem>
      <TimeLineItemMobile v-else v-show="year.show" :histories="getHistory(year.year)"></TimeLineItemMobile>
    </div>
     
  </div>
</template>

<script>
import TimeLineItem from './../components/TimeLineItem.vue'
import TimeLineItemMobile from './../components/TimeLineItemMobile.vue'
import FilterPanel from './../components/FilterPanel.vue'
import MenuIndex from './../components/MenuIndex.vue'
import historyMixins from './../mixins/historyMixins.js';

export default {
  name: "Timeline",
  mixins:[historyMixins],
  components:{TimeLineItem, TimeLineItemMobile, FilterPanel, MenuIndex},
  data() {
    return {
      years:[]
    };
  },
  computed: {
      getYear()
      {
        return this.$store.state.years;
      },
      culture() {
          return this.$store.state.culture;
      },
      language() {
          return this.$store.state.common;
      }
  },
  mounted() {
        
  },
  methods: {
    toggleVisibility(year)
    {
      year.show = !year.show;

      this.updateQuickFilter();
    },
    getButtonYearText(year)
    {
        if(year.show)
        {
          return this.language.closeYear[this.culture];
        }
        else
        {
          return this.language.showYear[this.culture];
        }
    },
    getClassFirstYear(index)
      {
        /*if (index === 0 && !this.state.showFilterMenu)
        {
          return "firstYear ma-2";
        }
        else
        {
        */  return "ma-2";
        //}
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeLine{
  width: 100%;
}

.firstYear{
  left: 18px;
}
</style>
