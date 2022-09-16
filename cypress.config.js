import { defineConfig } from "cypress";

export default defineConfig({
  projectId: Cypress.env('PROJECT_ID_KEY'),
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
