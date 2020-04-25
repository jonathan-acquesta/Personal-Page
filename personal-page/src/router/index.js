import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Timeline.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Timeline",
        component: Home
    }

];

const router = new VueRouter({
    routes
});

export default router;