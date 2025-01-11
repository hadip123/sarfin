import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import LoginView from "../pages/Login.vue";
import HomeView from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
