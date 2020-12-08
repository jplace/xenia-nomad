const { html } = require(`htm/preact`);
const pageOf = require("./_includes/util/page-of");

module.exports = class ThisPage {
  data() {
    return {
      title: "Not Found",
      permalink: "/404.html",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    const body = html`
      <div class="flex items-center justify-center">
        <h1 class="text-2xl lg:text-5xl">Page Not Found</h1>
      </div>
    `;
    return pageOf({ data, body });
  }
};
