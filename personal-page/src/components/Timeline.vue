<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <TimelineItem v-for="(event, index) in history" :key="index"
                  :date="event.date"
                  :title="event.title"
                  :description="event.description"
                  :image="event.image"
                  :category="event.category.name"
                  :icon="event.category.icon"
                  :color="event.category.color"></TimelineItem>
 <!--   <TimelineItem v-for="(event, index) in history" :key="index" 
    :date="event.date"
    :title="event.title"
    :description="event.description"
    :thumbnail="event.thumbnail"
    :category="event.category.name"
    :icon="event.category.icon"
    :color="event.category.color"></vTimelineItem>

    <vue-timeline-update
    :date="new Date('2020-04-20')"
    title="v2.2.0 - Initial D"
    description="Today I am thrilled to announce the release of Vue.js 2.2.0."
    thumbnail="/images/vuetimeline/initial_d.jpg"
    category="announcement"
    icon="code"
    color="red"
  />-->

    <p>
      Site em construção
    </p>
  </div>
</template>

<script>
import TimelineItem from './TimelineItem.vue';

export default {
  name: "Timeline",
  props: {
    msg: String,
  },
  components:{TimelineItem},
  data(){
    return{
      history:[],
      selectedCategories: [],
      keyWord:[],
      categoryType:{}
    }
  },
  mounted(){
    this.categoryType = {
      professionalExperience:{ color: 'red', name: 'ProfessionalExperience', icon: 'code' },
      academicLife:{ color: 'orange', name: 'AcademicLife', icon: 'code' },
      courses:{ color: 'turquoise', name: 'ExtracurricularCourse', icon: 'code' },
      certifications:{ color: 'green', name: 'Certification', icon: 'code' },
      books:{ color: 'black', name: 'Book', icon: 'code' },
      thoughts:{ color: 'grey', name: 'Thoughts', icon: 'code' },
      managementKnowledge:{ color: 'yellow', name: 'ManagementKnowledge', icon: 'code' },
      technologies:{ color: 'purple', name: 'Technologies', icon: 'code' },
      languages:{ color: 'Navy', name: 'Languages', icon: 'code' },
    };

    this.history.push({ date: new Date('2020-04-20 00:33:00'), category: this.categoryType.professionalExperience, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2020-04-12 00:33:00'), category: this.categoryType.academicLife, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2020-03-20 00:33:00'), category: this.categoryType.courses, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2020-01-20 00:33:00'), category: this.categoryType.certifications, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2019-04-20 00:33:00'), category: this.categoryType.books, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2018-04-20 00:33:00'), category: this.categoryType.languages, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2017-04-20 00:33:00'), category: this.categoryType.technologies, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2016-04-20 00:33:00'), category: this.categoryType.managementKnowledge, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
    this.history.push({ date: new Date('2015-04-20 00:33:00'), category: this.categoryType.thoughts, title: "Title test", description: "Description Test", thumbnail:"/images/vuetimeline/initial_d.jpg" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
