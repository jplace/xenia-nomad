const { html } = require(`htm/preact`);

const Container = require("./Container");

module.exports = ({ bodyScripts, children }) => html`
  <div class="min-h-screen flex flex-col">
    <${Container}
      moreClasses="home-hero md:border-gray md:border-l md:border-r bg-soft-black overflow-hidden"
    >
      <div class="home-hero_container">
        <div class="home-hero_menu">
          <img src="/images/hero/hero-1.jpg" class="home-hero_menu_img" />
          <ul class="home-hero_menu_ul">
            <li class="inline-block text-lg menu-item">
              <a class="no-underline" href="/blog">POSTS</a>
            </li>
            <li class="inline-block text-lg menu-item">
              <a class="no-underline" href="/about">ABOUT</a>
            </li>
            <li class="inline-block text-lg menu-item">
              <a
                class="no-underline"
                href="https://www.instagram.com/_adventurebitch/"
                >INSTAGRAM</a
              >
            </li>
          </ul>
        </div>
        <img src="/images/hero/hero-2.jpg" class="polaroid home-hero_img2" />
        <img src="/images/hero/hero-3.jpg" class="polaroid home-hero_img3" />
        <img src="/images/hero/hero-4.jpg" class="polaroid home-hero_img4" />
        <h1 class="home-hero_text">
          <a class="no-underline" href="/">Adventure Bitch</a>
        </h1>
      </div>
    <//>
    <${Container}
      moreClasses="flex-grow px-8 pt-6 pb-8 text-black border-gray border-l border-r bg-white"
    >
      ${children}
    <//>
    <${Container}
      moreClasses="px-4 py-4 text-center border-gray border-l border-r footer-bg"
    >
      <span class="text-sm text-white"
        >Made by <a href="https://jplace.github.io/">jplace</a> with${" "}
        <a href="https://www.11ty.dev/">11ty</a>,${" "}
        <a href="https://tailwindcss.com/">Tailwind CSS</a> and${" "}
        <a href="https://www.netlify.com/">Netlify</a>.</span
      >
    <//>
  </div>
  ${bodyScripts}
`;
