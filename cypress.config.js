const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1440,
    viewportWidth: 2960,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" && browser.isHeadled) {
          launchOptions.args.push("--window-size=1440,2960");
        }

        if (browser.name === "electron" && browser.isHeadless) {
          launchOptions.preferences.width = 1920;
          launchOptions.preferences.height = 1080;
        }

        if (browser.name === "firefox" && browser.isHeadless) {
          // menubars take up height on the screen
          // so fullPage screenshot size is 1400x1126
          launchOptions.args.push("--width=1400");
          launchOptions.args.push("--height=1200");
        }

        return launchOptions;
      });
    },
  },
});
