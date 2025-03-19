import RPage from "@/components/RPage.vue";
import VueX from "@/components/VueX.vue";
import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    {
      path: "/rpage",
      component: RPage,
    },
    {
      path: "/vuex",
      component: VueX,
    },
  ],
});

export default router;
