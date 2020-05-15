<template>
<div>
    <v-overlay class="overlay" :value="overlay">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="imageLink">
        <v-img class="descriptionImageLink" :src="mainImage"></v-img>
      </div>
    </v-overlay>

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

            <div class="tagsDiv" v-if="history.showDetail">
              <v-chip
                class="logs"
                color="white"
                label
                :text-color="tag.color"
                v-for="(tag, index) in history.tags"
                :key="index"
              >
                <b>{{ tag[culture] }}</b>
              </v-chip>
            </div>

            <div class="tagsDiv" v-if="!history.showDetail">
              <v-chip
                class="logs"
                color="white"
                label
                :text-color="tag.color"
                v-for="(tag, index) in history.mainTags"
                :key="index"
              >
                <b>{{ tag[culture] }}</b>
              </v-chip>
            </div>
            
            <div
              class="links"
              v-if="(history.links)">
              <span>Links: </span>
              <a v-for="(link, index) in history.links" :key="index"
                v-if="history.links"
                class="linkShow"
                v-on:click="processLink(link)">{{ link.description[culture] }}
              </a>
            </div>

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
    export default {
        props:['histories'],
        data() {
            return {
                small: false,
                 selectedCategories: [],
                    keyWord: [],
                    reverse: false,
                    right: false,
                    left: false,
                    overlay: false,
                    valueDeterminate: 50,
                    mainImage: "",
            }
        },
        computed: {
            getHistories()
            {
                return this.histories;
            },
            culture() {
                return this.$store.state.culture;
            },
            language() {
                return this.$store.state.common;
            },
        },
        methods: {
            getPeriodDescription(period)
            {
                return this.$store.state.common.from[this.culture] + " "  + period.begin + " "  + this.$store.state.common.to[this.culture] + " " + period.end;
            },
            formatePeriod(date) {
                return (this.$store.state.months[this.$store.state.culture][date.getMonth()] + " " + date.getFullYear());
            },
            openSite: function(url) {
                window.open(url, "_blank");
            },
            processLink(link){
                if(link.type == "certificate")
                {
                    this.overlay = true; 
                    this.mainImage = link.image;
                }
                else
                {
                    this.openSite(link.url);
                }
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

.logs {
  margin-right: -10px;
}

.card {
  margin-left: 10px;
}

.timelineApp {
  margin: 10px;
  text-align: left;
}

.tagsDiv {
  margin-left: -10px;
}

.tags {
  margin-top: 15px;
  color: rgb(7, 52, 177);
  font-weight: bold;
  margin-right: 10px;
  font-size: small;
}

.imageMain {
  box-shadow: 2px 2px 5px grey;
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

.links {
  color: rgb(10, 10, 32);
  font-size:small;
  margin-top: 15px;
  margin-left: 5px;
}

.linkShow {
  font-size:small;
  margin: 4px;
}

.descriptionImageLink {
  width: 80%;
  margin-left: 10%;
  max-width: 1000px;
  text-align: center;
}

.imageLink{
  text-align: center;
  max-height: 600px;
  overflow: visible;
}

.overlay {
  text-align: center;
}
</style>