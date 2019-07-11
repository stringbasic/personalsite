module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "../includes"
    },
    templateFormats: [
      "md",
      "svg"
    ]
  }
};
