<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-timeline>
        <v-timeline-item
          v-for="(history, i) in histories"
          :key="i"
          :color="history.category.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${history.category.color}--text`"
              v-text="formatePeriod(history.date)"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${history.category.color}--text`">{{ history.category.name }} {{ history.title }}</h2>
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
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
        ]
    };
  },
  mounted() {
    this.categoryType = {
      professionalExperience: {
        color: "red",
        name: "ProfessionalExperience",
        icon: "code"
      },
      academicLife: { 
        color: "orange",
         name: "AcademicLife",
          icon: "code" 
      },
      courses: {
        color: "turquoise",
        name: "ExtracurricularCourse",
        icon: "code"
      },
      certifications: { 
        color: "green", 
        name: "Certification", 
        icon: "code" 
      },
      books: { 
        color: "black", 
        name: "Book", 
        icon: "code" 
      },
      thoughts: { 
        color: "pink", 
        name: "Thoughts", 
        icon: "code" 
      },
      managementKnowledge: {
        color: "cyan",
        name: "ManagementKnowledge",
        icon: "code"
      },
      technologies: { 
        color: "purple", 
        name: "Technologies", 
        icon: "code" 
      },
      languages: { 
        color: "amber", 
        name: "Languages", 
        icon: "code" 
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
