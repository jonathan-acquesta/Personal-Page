<template>
  <div class="timeLine">
    
    <div class="text-center"  v-for="(year,index) in getYear" :key="index">
      <v-btn class="ma-2" outlined color="indigo"  @click="toggleVisibility(year)">{{year.year}}</v-btn>
      <TimeLineItem v-show="year.show" :histories="getHistory(year.year)"></TimeLineItem>
    </div>
     
  </div>
</template>

<script>
import TimeLineItem from './../components/TimeLineItem.vue'

export default {
  name: "Timeline",
  components:{TimeLineItem},
  data() {
    return {
      years:[]
    };
  },
  computed: {
      getYear()
      {
        if(this.years.length == 0)
        {
          this.years = this.$store.state.histories.map(x => x.date.getFullYear()).filter((value, index, self) => { return self.indexOf(value) === index; }).map(function(x, index) { return { year: x, show: false}; });  
          this.years[0].show = true;
          this.years[1].show = true;
          this.years[2].show = true;
          this.years[this.years.length - 1].show = true;
        }
        
        return this.years;
      }
  },
  mounted() {
        //this.years = this.$store.state.histories.map(x => x.date.getFullYear()).filter((value, index, self) => { return self.indexOf(value) === index; }).map(function(x, index) { return { year: x, show: index === 0}; });
  },
  methods: {
    getHistory(year)
    {
        return this.$store.state.histories.filter(x => x.date.getFullYear() === year);
    },
    toggleVisibility(year)
    {
      year.show = !year.show;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
