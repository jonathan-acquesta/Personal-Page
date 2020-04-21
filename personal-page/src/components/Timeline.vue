<template>
  <div class="hello">
    <h1>{{ msg }}</h1>5
    <v-timeline>
        <v-timeline-item
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
            <h2 :class="`headline font-weight-light mb-4 ${history.category.color}--text`">
              {{ history.category.name }} {{ history.title }}</h2>
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
      categoryType: {},
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
    this.categoryType = {
      professionalExperience: {
        color: "red",
        name: "ProfessionalExperience",
        icon: "mdi-briefcase-outline"
      },
      academicLife: { 
        color: "orange",
         name: "AcademicLife",
          icon: "mdi-school" 
      },
      courses: {
        color: "deep-purple",
        name: "ExtracurricularCourse",
        icon: "mdi-seal-variant"
      },
      certifications: { 
        color: "green", 
        name: "Certification", 
        icon: "mdi-book-variant" 
      },
      books: { 
        color: "teal", 
        name: "Book", 
        icon: "mdi-book-open-page-variant" 
      },
      thoughts: { 
        color: "pink", 
        name: "Thoughts", 
        icon: "mdi-head-snowflake-outline" 
      },
      managementKnowledge: {
        color: "cyan",
        name: "ManagementKnowledge",
        icon: "mdi-account-group"
      },
      technologies: { 
        color: "purple", 
        name: "Technologies", 
        icon: "mdi-laptop" 
      },
      languages: { 
        color: "indigo", 
        name: "Languages", 
        icon: "mdi-account-voice" 
      },
      milestones: { 
        color: "light-blue", 
        name: "Milestones", 
        icon: "mdi-flag-checkered" 
      }
    };

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
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
