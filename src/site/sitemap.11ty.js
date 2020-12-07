const { html } = require(`htm/preact`);
const pageOf = require("./_includes/util/page-of");

module.exports = class ThisPage {
  data() {
    return {
      permalink: "/sitemap.xml",
      eleventyExcludeFromCollections: true,
    };
  }

  render({ collections, metadata }) {
    const urlset = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${collections.all
      .map(
        (page) =>
          `  <url>
    <loc>${`${metadata.url}${page.url}`}</loc>
    <lastmod>${this.htmlDateString(page.date)}</lastmod>
  </url>`
      )
      .join("\n")}\n</urlset>`;
    return `<?xml version="1.0" encoding="utf-8"?>\n${urlset}`;
  }
};
