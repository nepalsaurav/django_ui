// global.d.ts
export {};

import { App } from "vue";

declare global {
  interface Window {
    // Main DjangoUI system
    DjangoUI: {
      // Register a component with a custom HTML tag
      register: (tag: string, component: any) => void;

      // Mount components by selector, with optional override props
      mount: (selector: string, props?: Record<string, any>) => void;

      // Reference to the main global Vue app
      app: App<any>;

      // Optional helper to show PrimeVue confirm dialogs
      showConfirm?: any;
    };
  }
}
