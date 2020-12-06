const { html } = require(`htm/preact`);

module.exports = ({ moreClasses, children }) => html`
<div class="md:container md:mx-auto ${moreClasses}">
${children}
</div>
`;