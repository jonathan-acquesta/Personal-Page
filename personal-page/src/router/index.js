import Vue from "vue";
import VueRouter from "vue-router";
import TimeLine from "../views/Timeline.vue";
import Resume from "../views/Resume.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "TimeLine",
        component: TimeLine
    },
    {
        path: "/Resume",
        name: "Resume",
        component: Resume
    }

];

const router = new VueRouter({
    routes
});

export default router;