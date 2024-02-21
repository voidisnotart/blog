
const util = require('util');

module.exports = function(eleventyConfig) {    
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy({"./public": "./"});
      

    eleventyConfig.addFilter('console', function(value) {
        const str = util.inspect(value);
        return `<div style="white-space: pre-wrap;">${str}</div>;`
    });

    eleventyConfig.addFilter("postDate", (date) => {
        return new Date(date).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) 
    });

    eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
		let metadata = await Image(src, {
			widths: [400, 800, 1600],
			formats: ["avif", "jpeg", "png"]
		});

		let imageAttributes = {
			alt,
			sizes,
            loading: "lazy",
			decoding: "async",
		};

		return Image.generateHTML(metadata, imageAttributes);
	});
  };