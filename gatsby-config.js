/* eslint-disable compat/compat */
const siteAddress = new URL("https://blog.joeplaa.com");
const siteMetadata = {
    title: `joeplaa blog`, //sitetitle
    titleTemplate: `joepla blog`, //sitename
    description: `Helping people create their digital home.`, //sitedescription
    image: `/images/banner-blog.png`,
    siteUrl: siteAddress.href,
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
    twitterUsername: ``,
    authorName: `Joep van de Laarschot`,
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-mdx-embed`,
        `gatsby-plugin-preact`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-webpack-bundle-analyser-v2`,
        `gatsby-remark-images`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -64
            }
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                options: {
                    emitWarning: true,
                    failOnError: false
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `joeplaa blog`,
                short_name: `joeplaa blog`,
                description: `Helping people create their digital home.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#07b1c2`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                icon_options: {
                    purpose: `any maskable`,
                }
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: `100`,
                            maintainCase: false,
                            removeAccents: true,
                            elements: [`h1`, `h2`, `h3`],
                        }
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noreferrer"
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            linkImagesToOriginal: true,
                            maxWidth: 960,
                            srcSetBreakpoints: [320, 640, 960],
                            withWebp: true,
                            showCaptions: ['title']
                        },
                    }
                ],
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }]
                    }
                }
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                stripMetadata: true,
                defaultQuality: 70,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                            elements: [`h1`, `h2`, `h3`],
                        }
                    }
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/authors`,
                name: `authors`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/recommended`,
                name: `recommended`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: `images`,
            },
        },
    ],
}
