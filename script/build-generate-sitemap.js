const fs = require("fs");
const prettier = require('prettier');

const siteUrl = "https://www.wangbaoqi.tech";

; (async () => {
  const { globby } = await import("globby");

  const pages = await globby([
    "pages/*.js",
    "posts/**/*.mdx",
    "posts/**/*.md",
    "!pages/_*.js",
    "!pages/_*.tsx",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages.map((page) => {
            const path = page
              .replace("pages/", "/")
              .replace("posts/", "/posts/")
              .replace(".js", "")
              .replace(".tsx", "")
              .replace(".mdx", "");

            return `
            <url>
                <loc>${siteUrl}${path}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
            `;
          })}
        </urlset>
  `;


  const formatted = prettier.format(sitemap, {
    parser: 'html',
  })
  console.log(formatted, "sitemap");
  fs.writeFileSync('public/sitemap.xml', formatted)

})();
