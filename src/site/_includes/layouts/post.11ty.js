const { html } = require(`htm/preact`);
const pageOf = require("../util/page-of");
const Page = require("../components/Page");

module.exports = class ThisPage {
  data() {
    return {};
  }

  render(data) {
    const body = html`
      <${Page}>
        <div class="mb-8">
          <h1 class="text-2xl lg:text-5xl leading-tight mb-2">${data.title}</h1>
          <p class="text-sm">
            Posted on ${this.readableDate(data.page.date.toISOString())}
          </p>
        </div>
        <div class="md-container">
          ${html([this.markdown(data.content)])}
        </div>
      <//>
    `;
    return pageOf({ data, body });
  }
};
