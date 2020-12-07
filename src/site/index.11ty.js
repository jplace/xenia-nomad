const { html } = require(`htm/preact`);
const pageOf = require("./_includes/util/page-of");
const Page = require("./_includes/components/page");

const aboutMd = `You want to travel but don’t have the money. 

You want to travel but don’t know how to get started.

You want to travel but it all seems too intimidating.

_Biiiitch_, you got this! But I’m here to help.


Travel has been my passion ever since I can remember. Traveling has been my goal ever since it was “impossible”. I’ve travelled with no money while working jobs that hardly allowed any time off. I’ve saved my last dollar to make it to destinations I could only dream of. And now, I’ve utilized the WFH orders to road trip around the Western USA. Whatever is stopping you from travelling, I will help you find a way. Trust me, I’ve been there before!`;

module.exports = class ThisPage {
  data() {
    return {
      title: "Adventure Bitch",
    };
  }

  async render(data) {
    const headScripts = html`
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    `;
    const bodyScripts = html`
      <script>
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", (user) => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
      </script>
    `;
    const body = html`
      <${Page} bodyScripts="${bodyScripts}">
        <div>
          <h1 class="text-2xl lg:text-5xl leading-tight mb-4">About</h1>
          <div class="md-container">
            ${html([this.markdown(aboutMd)])}
          </div>
          ${html([
            await this.fastImage(
              "./src/site/images/uploads/friday-at-the-ice-rink.jpeg",
              ""
            ),
          ])}
        </div>
      <//>
    `;
    return pageOf({ data, headScripts, body });
  }
};
