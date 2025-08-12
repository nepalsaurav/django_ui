console.log('Vue app is mounting...')

import { createApp } from "vue";
import App from "./App.vue";
import Custom from "./Custom.vue";

const app = createApp(App)
app.component('example-component', Custom)

console.log("sdasdad")
app.mount('#app')