const { html } = require(`htm/preact`);
const pageOf = require("../util/page-of");
const _Page = require("../components/_Page");

module.exports = class ThisPage {
  data() {
    return {};
  }

  async render(data) {
    const Page = _Page.bind(this);

    const body = await Page({
      children: html`
        <div class="mb-8">
          <h1 class="text-2xl lg:text-5xl leading-tight mb-2">${data.title}</h1>
        </div>
        <div class="md-container">
          ${html([this.markdown(data.content)])}
        </div>
      `,
    });
    return pageOf({ data, body });
  }
};
