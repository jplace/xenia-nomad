const { html } = require(`htm/preact`);
const pageOf = require("../_includes/util/page-of");
const Page = require("../_includes/components/Page");

module.exports = class ThisPage {
  data() {
    return {
      title: "Adventure Bitch",
      pagination: {
        data: "collections.post",
        size: 10,
        reverse: true,
        alias: "posts",
      },
    };
  }

  render(data) {
    const body = html`
      <${Page}>
        <h1 class="text-2xl lg:text-5xl leading-tight mb-4">Posts</h1>
        <ul>
          ${data.posts.map(
            (post) => html`
              <li class="mb-4">
                <a class="block no-underline" href="${post.url}"
                  ><p>
                    <span class="underline">${post.data.title}</span>
                  </p>
                  <p>
                    <span class="text-sm"
                      >Posted on ${this.readableDate(post.date.toISOString())}
                    </span>
                  </p></a
                >
              </li>
            `
          )}
        </ul>
        <ul class="flex">
          ${data.pagination.href.next &&
          html`
            <li>
              <a href="${data.pagination.href.next}">
                Older
              </a>
            </li>
          `}
          ${data.pagination.href.previous &&
          html`
            <li>
              <a href="${data.pagination.href.previous}">
                Newer
              </a>
            </li>
          `}
        </ul>
      <//>
    `;
    return pageOf({ data, body });
  }
};
