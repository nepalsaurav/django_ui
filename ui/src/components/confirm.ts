import { h, render } from "vue";
import ConfirmDialog from "primevue/confirmdialog";


// Create container
const container = document.createElement("div");
document.body.appendChild(container);

// Render ConfirmDialog into DOM
render(h(ConfirmDialog), container);


export {};
