<template>
<div>
    <v-timeline
      class="timelineApp"
      :dense="$vuetify.breakpoint.smAndDown"
      :reverse="!$vuetify.breakpoint.smAndDown"
      :left="$vuetify.breakpoint.smAndDown"
    >
     <v-timeline-item
        v-if="history.category.enable"
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
            <v-tooltip left v-show="!history.showDetail">
              <template v-slot:activator="{ on }">
                <v-btn v-show="!history.showDetail"
                  class=" showDetails"
                  v-on="on"
                  icon
                  v-on:click="history.showDetail = true"
                >
                  <v-icon color="pink" size="24px">mdi-download</v-icon>
                </v-btn>
              </template>
              <span>{{ language.showDetails[culture]}}</span>
            </v-tooltip>

            <table class="header">
              <tr>
                <td>
                  <div v-if="!history.showDetail">
                    <v-img
                      class="descriptionImageMin"
                      width="40"
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
            
            <Tags v-if="history.showDetail" :tags="history.tags"></Tags>
            <Tags v-else :tags="history.mainTags"></Tags>
            
            <Links :history="history"></Links>

            <br v-show="history.showDetail">
            <v-tooltip left v-show="history.showDetail">
              <template v-slot:activator="{ on }">
                <v-btn v-show="history.showDetail"
                  class=" showDetailsUp"
                  v-on="on"
                  icon
                  v-on:click="history.showDetail = false">
                  <v-icon color="pink" size="24px">mdi-upload</v-icon>
                </v-btn>
              </template>
              <span>{{ language.closeDetails[culture]}}</span>
            </v-tooltip>

          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
</div>
</template>

<script>
    import generalMixins from './../mixins/generalMixins.js'
    import Tags from './../components/Tags.vue'
    import Links from './../components/Links.vue'

    export default {
        props:['histories'],
        mixins: [generalMixins],
        components:{Tags, Links}, 
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

.showDetails {
  float: right;
  margin-right: 10px;
}

.showDetailsUp
{
  float: right;
  margin-right: 10px;
  margin-top: -20px;
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