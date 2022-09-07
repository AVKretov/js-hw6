const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" && browser.isHeadless) {
          launchOptions.args.push("--window-size=1440,2960");
        }
        if (browser.name === "chrome" && browser.isHeaded) {
          launchOptions.args.push("--window-size=1440,2960");
        }

        if (browser.name === "electron" && browser.isHeadless) {
          launchOptions.args.push("--window-size=1920,1080");
        }
        if (browser.name === "electron" && browser.isHeaded) {
          launchOptions.args.push("--window-size=1920,1080");
        }

        return launchOptions;
      });
    },
  },
});
