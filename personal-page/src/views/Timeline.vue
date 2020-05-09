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
        return this.$store.state.years;
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
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
