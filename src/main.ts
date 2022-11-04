import {
  createApp,
  // configureCompat
} from 'vue'

import "./index.css";

import App from './App.vue'
import {pinia} from "@/store";
import {router} from "@/router";

const app = createApp(App);

app.use(router)
app.use(pinia)

// default everything to Vue 2 behavior
// configureCompat({ MODE: 2 });

app.mount('#app')
