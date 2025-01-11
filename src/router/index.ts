import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
import LoginView from "../pages/Login.vue";
import HomeView from "../pages/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomeView,
  },
];

export const router = createRouter({
  routes,
  history: createMemoryHistory(),
});
