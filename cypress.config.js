import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    env: {
      CYPRESS_RECORD_KEY: "dt1t3n"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
