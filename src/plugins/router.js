import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/Home"),
        },
        {
            path: "*",
            name: "notFound",
            component: () => import("../views/NotFound"),
        }
    ]
});

export default router;
