const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const fs = require("fs");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

module.exports = function (config) {
  // Adding this just for the absoluteUrl filter used in 11ty examples
  config.addPlugin(pluginRss);

  // Support rendering data to markdown
  let markdown = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  config.setLibrary("md", markdown);
  config.addFilter("markdown", (value) => markdown.render(value));

  // Formatting for dates
  config.addFilter("readableDate", (dateStr) => {
    return DateTime.fromISO(dateStr, { zone: "utc" }).toLocaleString(
      DateTime.DATE_FULL
    );
  });
  config.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Default href filter
  config.addFilter("defaultHref", function (value, defaultHref) {
    if (value === "#") {
      return defaultHref;
    } else {
      return value;
    }
  });

  // Optimized images
  config.addNunjucksAsyncShortcode("fastImage", async function (src, alt) {
    // if (alt === undefined) {
    //   throw new Error(`Missing \`alt\` on fastImage from: ${src}`);
    // }
    return Promise.resolve("hello");

    // let stats = await Image(src, {
    //   widths: [350, 640, 960, 1200, null],
    //   formats: ["webp", "jpeg"],
    //   urlPath: "/images/",
    //   outputDir: "./dist/images/",
    // });
    // let lowestSrc = stats["jpeg"][0];

    // // Iterate over formats and widths
    // return `<picture>
    //     ${Object.values(stats)
    //       .map((imageFormat) => {
    //         return `  <source type="image/${
    //           imageFormat[0].format
    //         }" srcset="${imageFormat
    //           .map((entry) => entry.srcset)
    //           .join(", ")}">`;
    //       })
    //       .join("\n")}
    //       <img
    //         src="${lowestSrc.url}"
    //         width="${lowestSrc.width}"
    //         height="${lowestSrc.height}"
    //         alt="${alt}">
    //     </picture>`;
  });

  // Pass through static assets
  config.addPassthroughCopy("./src/site/admin");
  // config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/_redirects");
  config.addPassthroughCopy("./src/site/_headers");

  // Browsersync to serve 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("./dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
    templateFormats: ["njk", "11ty.js", "md"],
  };
};
