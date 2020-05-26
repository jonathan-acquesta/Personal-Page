<template>
  <div class="timeLine">
    <FilterPanel></FilterPanel>
    <div class="text-center"  v-for="(year,index) in getYear" :key="index">
      

        <v-tooltip left >
              <template v-slot:activator="{ on }">
                <v-btn class="ma-2" outlined color="indigo" v-on="on"  @click="toggleVisibility(year)">{{year.year}}</v-btn>
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
import generalMixins from './../mixins/generalMixins.js';

export default {
  name: "Timeline",
  mixins:[generalMixins],
  components:{TimeLineItem, TimeLineItemMobile, FilterPanel},
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
    getHistory(year)
    {
        return this.$store.state.histories.filter(x => x.date.getFullYear() === year);
    },
    toggleVisibility(year)
    {
      year.show = !year.show;
      
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
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeLine{
  width: 100%;
}
</style>
