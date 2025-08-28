//@ts-nocheck
import { createApp } from "vue";
import { defineCustomElement } from "vue";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "./components/Button.vue";





const CustomButton = defineCustomElement(Button, {
    configureApp(app) {
        app.use(PrimeVue, {
            theme: {
                preset: Aura
            }
        })
    },
    shadowRoot:false
})

customElements.define("button", CustomButton)
