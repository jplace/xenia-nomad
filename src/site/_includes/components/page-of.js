
module.exports = ({data: {title, metadata }, body, headScripts, headStyles, }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="/images/favicon.png" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:site_name" content="Adventure Bitch" />
    <meta property="og:url" content="${metadata.url}" />
    <meta property="og:image" content="${metadata.url}/images/ogimage.png" />
    <meta
      property="og:image:secure_url"
      content="${metadata.url}/images/ogimage.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:description"
      content="${metadata.defaultDescription}"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:site" content="${metadata.url}" />
    <meta name="twitter:image" content="${metadata.url}/images/ogimage.png" />
    <meta
      name="twitter:description"
      content="${metadata.defaultDescription}"
    />
    ${headScripts || ""}
    <link rel="stylesheet" href="/css/styles.css" />
    ${headStyles || ""}
    <title>${title}</title>
  </head>
  <body class="text-body text-black bg-light-gray">
    ${body}
  </body>
</html>
`;
