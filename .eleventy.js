
const util = require('util');

module.exports = function(eleventyConfig) {    
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addFilter('console', function(value) {
        const str = util.inspect(value);
        return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`
    });
  };