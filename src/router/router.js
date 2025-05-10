import VueRouter from "vue-router";
import homePage from "@/pages/homePage.vue"

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: homePage
        }
    ],
    mode: 'history'
})