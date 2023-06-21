import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import VueSmoothScroll from 'v-smooth-scroll'

const app = createApp(App);

app.use(createPinia());
app.use(VueSmoothScroll);
app.use(router);

app.mount("#app");
