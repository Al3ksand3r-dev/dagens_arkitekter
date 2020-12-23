const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/partials/_variables.scss";
            @import "@/scss/partials/_mixins.scss";
            @import "@/scss/mixins/_breakpoints.scss";
            @import "@/scss/mixins/_mediaQueries.scss";
          `,
      },
    },
  },
  outputDir: path.resolve(path.join(__dirname, "../api/public")),
};
