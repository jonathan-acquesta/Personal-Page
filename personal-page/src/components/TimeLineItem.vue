<template>
<div>
    <v-timeline
      class="timelineApp"
      :dense="$vuetify.breakpoint.smAndDown"
      :reverse="!$vuetify.breakpoint.smAndDown"
      :left="$vuetify.breakpoint.smAndDown"
    >
     <v-timeline-item :id="getID(history)"
        v-if="isEnableItem(history)"
        v-for="(history, i) in getHistories"
        :key="i"
        :dense="!$vuetify.breakpoint.smAndDown"
        :reverse="$vuetify.breakpoint.smAndDown"
        :color="history.category.color"
        :icon="history.category.icon"
        :left="$vuetify.breakpoint.smAndDown"
        :small="small"
        class="timeLineItem"
        fill-dot
      >
        <template v-if="!$vuetify.breakpoint.smAndDown" v-slot:opposite>
          <span
            :class="`font-weight-bold ${history.category.color}--text`"
            v-text="history.category.name[culture]"
          ></span>
          <br />
          <span
            style="opacity:0.8"
            :class="`font-weight-bold ${history.category.color}--text`"
            v-text="formatePeriod(history.date)"
          ></span>
        </template>
        <v-card  class="elevation-2">
          
          <div class="py-4 card">
            <ButtonShowDetail :history="history"></ButtonShowDetail>
           

            <table class="header">
              <tr>
                <td>
                  <div v-if="!history.showDetail">
                    <v-img
                      class="descriptionImageMin"
                      width="60"
                      :src="history.image"
                    ></v-img>
                  </div>
                </td>
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
                  <span
              style="opacity:0.8"
              v-if="$vuetify.breakpoint.smAndDown"
              :class="`font-weight-bold ${history.category.color}--text`"
              v-text="history.category.name[culture] + ' - ' + formatePeriod(history.date)"
            ></span>
                  <div class="descriptionFull" v-if="history.showDetail">
                    <div class="description">
                      {{ history.description[culture] }}
                    </div>
                    <div>
                      <v-img
                        class="descriptionImage"
                        width="110"
                        :src="history.image"
                      ></v-img>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            
            <Tags v-if="history.showDetail" :tagsData="history.tags"></Tags>
            <Tags v-else :tagsData="getTags(history)"></Tags>
            
            <Links :history="history"></Links>

            <br v-show="history.showDetail">
            <ButtonCloseDetail :history="history"></ButtonCloseDetail>
            

          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
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

.period
{
  margin-top: -15px;
  font-size: 14px;
  font-weight: bold;
}


.timeLineItem{
  width: 100%;
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
  text-align: justify;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: -14px;
}

</style>