import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "a635177e-8239-461c-bd1b-ef2e8db8a265",
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
