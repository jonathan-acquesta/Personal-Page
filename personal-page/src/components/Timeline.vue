<template>


  <div class="timeLine">


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
              <v-img class="descriptionImage"  height="110"  width="110" :src="history.image"></v-img>

            </div>
            </div>
         
            <div>
              <span class="tags" v-for="(tag, index) in history.tags" :key="index" >{{ tag[culture] }}</span>
            </div>
            <br>
               <div class="links">
              <span  >Link: </span>
              <a class="linkShow" v-on:click="overlay = true;">{{history.link.description[culture]}} </a>
              
               <v-overlay class="overlay" :value="overlay">
      <v-btn
        icon
        @click="overlay = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-img class="descriptionImageLink"  :src="history.link.image"></v-img>
    </v-overlay>

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
  props: {
    msg: String
  },
  data() {
    return {
      histories: [],
      selectedCategories: [],
      keyWord: [],
      reverse: false,
      right: false,
      left: false,
      small: false,
      overlay: false,
      valueDeterminate: 50
    };
  },
  computed: {
    culture(){
      return this.$store.state.culture;
    }
  },
  mounted() {
    /*
    this.histories.push({
      date: new Date("2020-07-20 00:33:00"),
      category: this.$store.state.categoryType.professionalExperience,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.academicLife,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.technologies,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.courses,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.books,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.$store.state.categoryType.thoughts,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

 this.histories.push({
      date: new Date("2019-01-10 00:33:00"),
      category: this.$store.state.categoryType.managementKnowledge,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

     this.histories.push({
      date: new Date("2018-05-10 00:33:00"),
      category: this.$store.state.categoryType.languages,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });

    this.histories.push({
      date: new Date("2018-04-10 00:33:00"),
      category: this.$store.state.categoryType.milestones,
      title: {
        "pt-BR": "Este é o meu título",
        "en-US": "It is my title",
      },
      description: {
        "pt-BR": "O futuro está chegando e, com ele, as profissões do futuro: carreiras em ascensão que possivelmente se tornarão ainda mais importantes e significativas nos próximos anos.",
        "en-US": "The future is coming and, with it, the professions of the future: careers on the rise that are likely to become even more important and significant in the years to come.",
      },
      image: "./assets/thoughts.ico",
      tags: [this.$store.state.tags.scrum, this.$store.state.tags.kanban]
    });
    */

   this.histories.push({
      date: new Date("2019-02-02"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "Scrum.org - PSM 1",
        "en-US": "Scrum.org - PSM 1",
      },
      description: {
        "pt-BR": "A certificação Professional Scrum Master foi um momento importante para formalização do conhecimento que adquiri durante toda a minha carreira profissional. Eu tive a oportunidade de trabalhar com SCRUM desde o inicio dos anos 2010 e esse framework agregou em muito nos bons resultados que venho obtendo.",
        "en-US": "The Professional Scrum Master certification was an important moment to formalize the knowledge I acquired throughout my professional career. I had the opportunity to work with SCRUM since the beginning of the 2010s and this framework added a lot to the good results I have been getting.",
      },
      image: require('@/assets/psmi.png'),
      link: {
        image:   require('@/assets/certificatepsm1.jpg'),
        description:{ "pt-BR": "Certificado", "en-US": "Certificate"}
      },
      tags: [this.$store.state.tags.scrum]
    });

    this.histories.push({
      date: new Date("2018-10-20"),
      category: this.$store.state.categoryType.certifications,
      title: {
        "pt-BR": "SCRUMstudy – SFC",
        "en-US": "SCRUMstudy – SFC",
      },
      description: {
        "pt-BR": "A certificação Scrum Fundamentals Certified foi importante para mim em relação a validação do conhecimento e correta compreensão os pilares, valores e fundamentos do SCRUM.",
        "en-US": "Scrum Fundamentals Certified certification was important to me in terms of knowledge validation and correct understanding of the pillars, values and fundamentals of SCRUM.",
      },
      image: require('@/assets/scrumfc.png'),
      link: {
        image:   require('@/assets/certificatescrumfoundation.jpg'),
        description:{ "pt-BR": "Certificado", "en-US": "Certificate"}
      },
      tags: [this.$store.state.tags.scrum]
    });

    this.orderByDates();
    
    
  },
  methods: {
    orderByDates()
    {
      this.histories.sort(function(a,b){ return new Date(b.date) - new Date(a.date); });
    },
    formatePeriod(date)
    {
      return this.$store.state.months[this.$store.state.culture][date.getMonth()] + " " + date.getFullYear();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card{
  margin-left: 10px;
}

.timelineApp{
  margin: 10px;
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
