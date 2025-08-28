import { createApp, h, render } from "vue";
import Custom from "./Custom.vue";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ConfirmationService from "primevue/confirmationservice";
import { Button } from "primevue";

const rootContainer = document.createElement("div")
document.body.appendChild(rootContainer)


const app = createApp({
    render: () => h("div")
})

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(ConfirmationService)
app.mount(rootContainer)



window.DjangoUI = window.DjangoUI || {};
// registry for component
const registry: Record<string, any> = {};


window.DjangoUI.app = app

window.DjangoUI.register = (tag: string, component: any) => {
    registry[tag] = component;
}

window.DjangoUI.mount = (selector: string, overrideProps: Record<string, any> = {}) => {
    const elements = selector.startsWith("#")
        ? [document.querySelector(selector)].filter(Boolean)
        : Array.from(document.querySelectorAll(selector));

    elements.forEach((el) => {
        if (!el) return
        const tag = el.tagName.toLowerCase();
        const component = registry[tag];
        if (!component) return;

        // Collect element attributes as props
        const attrProps: Record<string, any> = {};
        Array.from(el.attributes).forEach((attr) => {
            attrProps[attr.name] = attr.value;
        });

        const props = { ...attrProps, ...overrideProps };

        // Create VNode and render into element
        const vnode = h(component, props);
        render(vnode, el);
    });
}




// --- Register components ---
window.DjangoUI.register("custom", Custom);

const DButton = {
  props: ["label", "severity", "outlined", "text", "raised", "icon", "onClick"],
  // Render function that returns only the PrimeVue Button
  render() {
    return h(Button, {
      ...this.$props,
      onClick: this.onClick, // forward click
    });
  },
};

window.DjangoUI.register("d-button", DButton);

import "./components/confirm"


// --- Auto-mount all registered components on DOMContentLoaded ---
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(registry).forEach((tag) => {
        window.DjangoUI.mount(tag);
    });

});