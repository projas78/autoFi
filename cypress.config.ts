import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 180000,
  chromeWebSecurity: false,
  "viewportWidth": 1920,
  "viewportHeight": 1024,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});