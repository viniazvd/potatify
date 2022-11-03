import { RouteRecordRaw } from "vue-router";
import Home from "@components/Index.vue";
import SAlert from "@components/SAlert/Index.vue";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/alert", component: SAlert },
]
