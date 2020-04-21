<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

<div class="filter" v-for="(category, index) in categoryType" :key="index">
  <span v-if="category.enable" :class="`headline enableTitle font-weight-bold ${category.color}--text`" v-text="category.name" v-on:click="InvertSelection(category)"></span>
  <span v-else :class="`headline disabledTitle font-weight-bold ${category.color}--text`" v-text="category.name" v-on:click="InvertSelection(category)"></span>
</div>

    <v-timeline>
        <v-timeline-item v-show="history.category.enable"
          v-for="(history, i) in histories"
          :key="i"
          :color="history.category.color"
          :icon="history.category.icon"
          fill-dot
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="formatePeriod(history.date)"
            ></span>
          </template>
          <div class="py-4">
            <span
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="history.category.name"
            ></span>
            <h2 :class="`headline font-weight-light mb-4 ${history.category.color}--text`">
              {{ history.title }}</h2>
            <div>
              {{ history.description }}
            </div>
          </div>
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
      categoryType: {
        professionalExperience: {
          color: "red",
          name: "ProfessionalExperience",
          icon: "mdi-briefcase-outline",
          enable: true
        },
        academicLife: { 
          color: "orange",
          name: "AcademicLife",
          icon: "mdi-school",
          enable: true
        },
        courses: {
          color: "deep-purple",
          name: "ExtracurricularCourse",
          icon: "mdi-seal-variant",
          enable: true
        },
        certifications: { 
          color: "green", 
          name: "Certification", 
          icon: "mdi-book-variant",
          enable: true
        },
        books: { 
          color: "teal", 
          name: "Book", 
          icon: "mdi-book-open-page-variant",
          enable: true 
        },
        thoughts: { 
          color: "pink", 
          name: "Thoughts", 
          icon: "mdi-head-snowflake-outline",
          enable: true 
        },
        managementKnowledge: {
          color: "cyan",
          name: "ManagementKnowledge",
          icon: "mdi-account-group",
          enable: true
        },
        technologies: { 
          color: "purple", 
          name: "Technologies", 
          icon: "mdi-laptop",
          enable: true
        },
        languages: { 
          color: "indigo", 
          name: "Languages", 
          icon: "mdi-account-voice",
          enable: true 
        },
        milestones: { 
          color: "light-blue", 
          name: "Milestones", 
          icon: "mdi-flag-checkered",
          enable: true 
        }
      },
      months: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
        ]
    };
  },
  mounted() {
    this.histories.push({
      date: new Date("2020-07-20 00:33:00"),
      category: this.categoryType.professionalExperience,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.categoryType.academicLife,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.categoryType.certifications,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.categoryType.technologies,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.categoryType.courses,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

     this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.categoryType.books,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

    this.histories.push({
      date: new Date("2020-05-10 00:33:00"),
      category: this.categoryType.thoughts,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

 this.histories.push({
      date: new Date("2019-01-10 00:33:00"),
      category: this.categoryType.managementKnowledge,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

     this.histories.push({
      date: new Date("2018-05-10 00:33:00"),
      category: this.categoryType.languages,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
    });

    this.histories.push({
      date: new Date("2018-04-10 00:33:00"),
      category: this.categoryType.milestones,
      title: "Title test",
      description: "Teste Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      image: "./assets/thoughts.ico"
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
      return this.months[date.getMonth()] + " " + date.getFullYear();
    },
    InvertSelection(category)
    {
        category.enable = !category.enable;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .filter{
    padding: 5px;
  }

  .enableTitle{
    cursor: pointer;
  }

  .disabledTitle{
    opacity: 0.4;
    cursor: pointer;
  }
</style>
