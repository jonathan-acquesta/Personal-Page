<template>


  <div class="timeLine">
 <v-overlay class="overlay" :value="overlay">
                  <v-btn
                    icon
                    @click="overlay = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-img class="descriptionImageLink"  :src="mainImage"></v-img>
                </v-overlay>

        <v-timeline class="timelineApp" :dense="$vuetify.breakpoint.smAndDown" :reverse="!$vuetify.breakpoint.smAndDown" :left="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-if="history.category.enable"
          v-for="(history, i) in histories"
          :key="i"
          :dense="!$vuetify.breakpoint.smAndDown"
          :reverse="$vuetify.breakpoint.smAndDown"
          :color="history.category.color"
          :icon="history.category.icon"
          :left="$vuetify.breakpoint.smAndDown"
        :small="small"
          fill-dot
          
        >
          <template v-if="!$vuetify.breakpoint.smAndDown" v-slot:opposite>
            <span style="opacity:0.8"
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="formatePeriod(history.date)"
            ></span>
          </template>
          <v-card class="elevation-2">
          <div class="py-4 card">

            <span
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="history.category.name[culture]"
            ></span>
            <h2 :class="`headline font-weight-light mb-4 ${history.category.color}--text`">
              {{ history.title[culture] }}</h2>
              <div class="descriptionFull">
            <div class="description">
              {{ history.description[culture] }}
            </div>
            <div>
              <v-img class="descriptionImage"  width="110" :src="history.image"></v-img>
            </div>
            </div>
         
            <div class="tagsDiv">
              <v-chip class="logs" color="white" label :text-color="tag.color" v-for="(tag, index) in history.tags" :key="index">
                <b>{{ tag[culture] }}</b>
              </v-chip>
            </div>

            <br>
               <div class="links" v-if="history.link || history.externalLinks">
                  <span  >Link: </span>
                  <a v-if="history.link" class="linkShow" v-on:click="overlay = true;mainImage=history.link.image">{{history.link.description[culture]}} </a>
                  <a class="linkShow" style="margin-left:10px;" v-for="(externalLink, index) in history.externalLinks" :key="index" v-on:click="openSite(externalLink.url)">{{ externalLink.description[culture] }}</a>
                </div>
            <span style="opacity:0.8" v-if="$vuetify.breakpoint.smAndDown"
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="formatePeriod(history.date)"
            ></span>
          </div>
          </v-card>
        </v-timeline-item>
      </v-timeline>
     
      
  </div>
</template>

<script>


  export default {
  name: "Timeline",
  data() {
    return {
      selectedCategories: [],
      keyWord: [],
      reverse: false,
      right: false,
      left: false,
      small: false,
      overlay: false,
      valueDeterminate: 50,
      mainImage: "",
    };
  },
  computed: {
    culture(){
      return this.$store.state.culture;
    },
    histories()
    {
      return this.$store.state.histories;
    }
  },
  mounted() {
   

    
  },
  methods: {
    formatePeriod(date)
    {
      return this.$store.state.months[this.$store.state.culture][date.getMonth() +1] + " " + date.getFullYear();
    },
     openSite: function (url) {   
        window.open(url, "_blank");    
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logs{
  margin-right: -10px;
}

.card{
  margin-left: 10px;
}

.timelineApp{
  margin: 10px;
}

.tagsDiv{
  margin-left: -10px;
}

  .tags{
    margin-top: 15px;
    color:  rgb(7, 52, 177);
    font-weight: bold;
    margin-right: 10px;
    font-size:small;
  }


.imageMain{
  box-shadow: 2px 2px 5px grey;
}

.skills{
  width: 30%;
  display: flex
}

.descriptionFull{
  display: flex;
}

.description{
  width: 85%;
  text-align: justify;
  display: flex;
}

.descriptionImage{
  width: 25%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top:5px;
  display: flex;
}

.descriptionImageMobile{
  width: 100%;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}

.descriptionImageMobile{
  width: 100%;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
}

.links{
  color: rgb(10, 10, 32);
}

.linkShow{
  text-decoration: underline;
}

.descriptionImageLink{
  width: 80%;
  margin-left: 10%;
  max-width: 1000px;
  text-align: center;
}

.overlay{
  text-align: center;
}
</style>
