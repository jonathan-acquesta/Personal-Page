import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@fortawesome/fontawesome-free/css/all.css'
import certifications from "./classes/certifications.js";
import books from "./classes/books.js";
import professionalExperiences from "./classes/professionalExperiences.js";
import academicLife from "./classes/academicLife.js";
import courses from "./classes/courses.js";
import languageCourses from "./classes/languageCourses.js";
import thoughts from "./classes/thoughts.js";


Vue.config.productionTip = false;

var app = new Vue({
    mixins: [certifications, books, professionalExperiences, academicLife, courses, languageCourses, thoughts],
    router,
    store,
    vuetify,
    render: h => h(App),
    methods: {
        mountYears(histories) {
            this.$store.state.years = histories.map(x => x.date.getFullYear()).filter((value, index, self) => { return self.indexOf(value) === index; })
                .map(function(x, index) { return { year: x, show: true }; });
        }
    },
    mounted() {
        var histories = [];

        this.mountProfessionalExperiences(histories);
        this.mountAcademicLife(histories);
        this.mountCertifications(histories);
        this.mountLanguageCourses(histories);
        this.mountCourses(histories);
        this.mountBooks(histories);
        this.mountThoughts(histories);

        histories.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

        this.$store.state.histories = histories;

        this.mountYears(histories);
    },
}).$mount("#app");