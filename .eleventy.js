const util = require('util');
const Image = require('@11ty/eleventy-img')

module.exports = function(eleventyConfig) {        
    eleventyConfig.addPassthroughCopy({"./public": "./"});
      

    eleventyConfig.addFilter('console', function(value) {
        const str = util.inspect(value);
        console.log(str)
        return `<div style="white-space: pre-wrap;">${str}</div>;`
    });

    eleventyConfig.addFilter("postDate", (date) => {
        return new Date(date).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) 
    });

    eleventyConfig.addFilter("datetime", (date) => {
        return new Date(date).toISOString()
    });
    
    eleventyConfig.addShortcode("image", async function(src, alt, sizes) {        
		let metadata = await Image(src, {
			widths: [358, 716, 1024, 2048],
			formats: ["jpeg", "webp"],            
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