const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/partials/_variables.scss";
            @import "@/scss/partials/_mixins.scss";
          `,
      },
    },
  },
  outputDir: path.resolve(path.join(__dirname, "../api/public")),
};
