module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "../includes",
      data: "../data"
    },
    templateFormats: [
      "md",
      "svg"
    ]
  }
};
