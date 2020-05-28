<template>
<div class="timelineApp">
<div  v-if="isEnableItem(history)"
        v-for="(history, i) in getHistories"
        :key="i">
   
        <v-card  class="elevation-2 cardMobile">
          
          <div class="py-4 card">
            
            
            <v-icon class="iconTitle" :color="history.category.color" size="24px">{{history.category.icon}}</v-icon>
            <span v-if="$vuetify.breakpoint.smAndDown"
              :class="`periodTitle font-weight-bold ${history.category.color}--text`"
              v-text="history.category.name[culture] + ' - ' + formatePeriod(history.date)"
            ></span>
            
            <v-divider class="divider"
                :key="'Divider' + i"
              ></v-divider>
            <table class="header">
              <tr>
               
                <td>
                  <span
                    :class="`headline font-weight-bold ${history.category.color}--text`"
                    v-text="history.title[culture]"
                  ></span>
                  <h2
                    :class="`subTitle font-weight-light mb-4 ${history.category.color}--text`">
                    {{ history.subTitle[culture] }}
                  </h2>
                  <h4 :class="`period mb-4 ${history.category.color}--text`" v-if="history.period">{{ getPeriodDescription(history.period) }}</h4>
                  
                  
                </td>
                 <td>
                  <div v-if="!history.showDetail">
                    <v-img
                      class="descriptionImageMin"
                      width="80"
                      :src="history.image"
                    ></v-img>
                  </div>
                </td>
              </tr>
            </table>
            
            <Tags v-if="history.showDetail" :vertical="false" :tagsData="history.tags"></Tags>
            <Tags v-else  :vertical="false" :tagsData="getTags(history)"></Tags>
            
            <Links :history="history"></Links>

          </div>
        </v-card>

</div>
</div>
</template>

<script>
    import historyMixins from './../mixins/historyMixins.js'
    import Tags from './../components/Tags.vue'
    import Links from './../components/Links.vue'
    import ButtonShowDetail from './../components/ButtonShowDetail.vue'
    import ButtonCloseDetail from './../components/ButtonCloseDetail.vue'

    export default {
        props:['histories'],
        mixins: [historyMixins],
        components:{Tags, Links, ButtonShowDetail, ButtonCloseDetail}, 
        data() {
            return {
                small: false,
                 selectedCategories: [],
                    keyWord: [],
                    reverse: false,
                    right: false,
                    left: false,
            }
        },
        computed: {
            
           
        },
        methods: {
            getPeriodDescription(period)
            {
                return this.$store.state.common.from[this.culture] + " "  + period.begin + " "  + this.$store.state.common.to[this.culture] + " " + period.end;
            },
            formatePeriod(date) {
                return (this.$store.state.months[this.$store.state.culture][date.getMonth()] + " " + date.getFullYear());
            }
        },
    }
</script>

<style scoped>
.subTitle{
  font-size: 20px;
}

.header{
  width: 100%;
}

.period
{
  margin-top: -15px;
  font-size: 14px;
  font-weight: bold;
}

.divider{
  margin-top: 5px;
  margin-bottom: 10px;
}

.timeLineItem{
  width: 100%;
}

.periodTitle{
  margin-bottom: 10px;
  margin-right: 5px;
  
}

.iconTitle{

  margin-right: 5px;
}


.card {
  margin-left: 10px;
}

.timelineApp {
  margin: 10px;
  text-align: left;
}


.skills {
  width: 30%;
  display: flex;
}

.descriptionFull {
  display: flex;
}

.description {
  width: 85%;
  text-align: justify;
  display: flex;
}

.descriptionImage {
  width: 25%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  display: flex;
}

.descriptionImageMobile {
  width: 100%;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}

.descriptionImageMobile {
  width: 100%;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}

.descriptionImageMin {
float: right;
  margin-left: 5px;
  margin-right: 5px;
}

.cardMobile{
  margin-bottom: 10px;
}

</style>