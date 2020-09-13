/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const sitemap = require('nextjs-sitemap-generator');
// https://github.com/IlusionDev/nextjs-sitemap-generator
sitemap({
    baseUrl: 'https://joeplaa.com',
    ignoreIndexFiles: true,
    pagesDirectory: __dirname + "\\..\\..\\pages",
    targetDirectory: './public/',
    nextConfigPath: __dirname + "\\..\\..\\next.config.js",
    ignoredExtensions: [
        'png',
        'jpg',
        'webp'
    ],
    pagesConfig: {
        '/login': {
            priority: '0.5',
            changefreq: 'daily'
        }
    },
    sitemapStylesheet: [
        {
            type: "text/css",
            styleFile: "/test/styles.css"
        },
        {
            type: "text/xsl",
            styleFile: "test/test/styles.xls"
        }
    ]
});

console.log(`✅ sitemap.xml generated!`);