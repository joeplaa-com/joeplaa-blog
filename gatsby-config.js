/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable compat/compat */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
);

const siteMetadata = {
    metadata: {
        authorName: 'Joep van de Laarschot',
        authorFirstName: 'Joep',
        authorLastName: 'van de Laarschot',
        businessName: 'Joeplaa blog',
        pageAboutDescription: 'About me and this blog',
        pageAboutImage: '/images/banner-blog-default.png',
        pageAboutTitle: 'About',
        pageBlogDescription: 'There\'s a lot of stuff I\'m trying to understand and I learned that talking about them or writing them down really helps. Giving words to my thought makes them more tangible, concrete and well better. They get more articulated and thought-through.',
        pageBlogImage: '/images/banner-blog.png',
        pageBlogTitle: 'Blog',
        pageBlogSubtitle: '',
        pageRecommendedDescription: 'I\'ve read a lot of books and watched countless videos on the web. Here you can find a list of my recommended books and videos.',
        pageRecommendedImage: '/images/banner-blog-recommended.png',
        pageRecommendedTitle: 'Recommended',
        siteDescription: 'My thoughts on ',
        siteImage: '/images/banner-blog-default.png',
        siteLanguage: 'en-US',
        siteLocale: 'en_us',
        siteName: 'joeplaa blog',
        siteUrl: process.env.GATSBY_BLOG_URL,
        siteTitle: 'joeplaa blog',
        titleSeparator: '|',
        titleTemplate: 'joeplaa blog',
        twitterUsername: ''
    },
    navigation: {
        about: '/about',
        blog: '/blog',
        contact: process.env.GATSBY_URL + '/home#Contact',
        home: '/',
        joeplaa: process.env.GATSBY_URL,
        portfolio: process.env.GATSBY_URL + '/portfolio',
        recommended: '/recommended',
        tagsNav: '/tags'
    },
    settings: {
        breakpoint: 'md',
        designedBy: 'Website design by',
        designerName: 'Joeplaa',
        designerUrl: 'https://github.com/joeplaa/joeplaa.com',
        umamiID: 'a8a7d2b3-3217-4c64-9c95-a25e7b18e5f9'
    },
    siteUrl: process.env.GATSBY_BLOG_URL, // needed for gatsby-plugin-advanced-sitemap
    urls: {
        umami: 'https://umami.joeplaa.com',
        email: 'info@joeplaa.com',
        facebook: 'https://www.facebook.com/joeplaa',
        github: 'https://github.com/joeplaa',
        goodreads: 'https://www.goodreads.com/joeplaa/',
        instagram: 'https://www.instagram.com/joeplaa/',
        linkedin: 'https://www.linkedin.com/in/joeplaa/'
    }
};

module.exports = {
    flags: {
        DEV_SSR: true,
        FAST_DEV: false,
        PARALLEL_SOURCING: true
    },
    siteMetadata: siteMetadata,
    plugins: [
        'gatsby-plugin-advanced-sitemap',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-image',
        'gatsby-plugin-mdx-embed',
        'gatsby-plugin-preact',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-webpack-bundle-analyser-v2',
        'gatsby-remark-reading-time',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
                // Default settings that may be ommitted or customized
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public']
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'joeplaa blog',
                short_name: 'joeplaa blog',
                description: 'There\'s a lot of stuff I\'m trying to understand and I learned that talking about them or writing them down really helps. Giving words to my thought makes them more tangible, concrete and well better. They get more articulated and thought-through.',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#c21807',
                display: 'browser',
                icon: 'src/images/icon.png',
                icon_options: {
                    purpose: 'any maskable'
                }
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-admonitions',
                        options: {
                            customTypes: {
                                contents: {
                                    keyword: 'contents',
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>'
                                }
                            },
                            tag: ':::',
                            icons: 'svg',
                            infima: false
                        }
                    },
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            offsetY: '100',
                            maintainCase: false,
                            removeAccents: true,
                            elements: ['h1', 'h2', 'h3']
                        }
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow noreferrer'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            linkImagesToOriginal: true,
                            maxWidth: 960,
                            breakpoints: [320, 640],
                            withWebp: true,
                            showCaptions: ['title']
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-page-progress',
            options: {
                includePaths: [],
                excludePaths: ['/', { regex: '^/about' }, { regex: '^/blog' }, { regex: '^/books.*' }, { regex: '^/recommended' }, { regex: '^/tags' }, { regex: '^/videos.*' }],
                height: 3,
                prependToBody: false,
                color: '#c21807',
                footerHeight: 120
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
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
            resolve: 'gatsby-plugin-sharp',
            options: {
                stripMetadata: true,
                defaultQuality: 70
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                            elements: ['h1', 'h2', 'h3']
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, '/content/authors'),
                name: 'authors'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, '/content/blog'),
                name: 'blog'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, '/content/recommended'),
                name: 'recommended'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, '/src/images'),
                name: 'images'
            }
        }
    ]
};
