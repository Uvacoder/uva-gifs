module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/*.gif");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  eleventyConfig.addPassthroughCopy("src/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
};
