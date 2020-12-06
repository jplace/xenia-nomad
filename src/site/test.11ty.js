const { html } = require('htm/preact');
const render = require('preact-render-to-string');
const pageOf = require("./_includes/components/page-of");
const Page = require("./_includes/components/Page");

async function asyncCodeThing() {
  return Promise.resolve("cool");
}

module.exports = class ThisPage {
  data() {
    return {
      title: 'Test page',
    };
  }

  async render(data) {
    const body = render(html`
    <${Page}>
      <h1>${await asyncCodeThing()}</h1>
    <//>
    `);
    return pageOf({data, body});
  }
};