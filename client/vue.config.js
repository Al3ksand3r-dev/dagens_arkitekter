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
};
