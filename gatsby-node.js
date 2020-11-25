/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kebabCase = require("lodash").kebabCase;

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    return graphql(`
    {
      blogs: allMdx(
        filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/blog/**/*.mdx" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
          fileAbsolutePath
        }
      }
      recommended: allMdx(
        filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/recommended/**/*.mdx" } }
        sort: { fields: [frontmatter___title], order: ASC }
        limit: 1000
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
          fileAbsolutePath
        }
      }
      tagsBlog: allMdx(
        limit: 2000
        filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/blog/**/*.mdx" } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      tagsRecommend: allMdx(
        limit: 2000
        filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/recommended/**/*.mdx" } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        // templates
        const blogMoreTemplate = path.resolve('src/templates/blogMoreTemplate.tsx');
        const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');
        const recommendedTemplate = path.resolve('src/templates/recommendedTemplate.tsx');
        const recommendedPostTemplate = path.resolve('src/templates/recommendedPostTemplate.tsx');
        const tagsTemplate = path.resolve('src/templates/tagsTemplate.tsx');

        // data
        const blogs = result.data.blogs.nodes;
        const recommended = result.data.recommended.nodes;
        const tagsBlog = result.data.tagsBlog.group;
        const tagsRecommend = result.data.tagsRecommend.group
        const tags = [...tagsBlog, ...tagsRecommend];

        // pagination
        const postsPerPage = 6;
        const numBlogPages = Math.ceil(blogs.length / postsPerPage);
        const numRecommendedPages = Math.ceil(recommended.length / postsPerPage);

        // create pagination pages for blog
        Array.from({ length: numBlogPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: blogMoreTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1,
                    tags: tagsBlog
                },
            })
        })

        // create pagination pages for recommended
        Array.from({ length: numRecommendedPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/recommended` : `/recommended/${i + 1}`,
                component: recommendedTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numRecommendedPages,
                    currentPage: i + 1,
                    tags: tagsRecommend
                },
            })
        })

        // create page for each mdx blog node
        blogs.forEach((post, index) => {
            const slug = post.fields.slug;
            createPage({
                path: slug,
                component: blogPostTemplate,
                context: {
                    slug: slug,
                    previous: index === blogs.length - 1 ? null : blogs[index + 1],
                    next: index === 0 ? null : blogs[index - 1],
                },
            });
        });

        // create page for each mdx recommended node
        recommended.forEach((post, index) => {
            const slug = post.fields.slug;
            createPage({
                path: slug,
                component: recommendedPostTemplate,
                context: {
                    slug: slug,
                    previous: index === recommended.length - 1 ? null : recommended[index + 1],
                    next: index === 0 ? null : recommended[index - 1],
                },
            });
        });

        // create page for each tag
        tags.forEach(tag => {
            const slug = kebabCase(tag.fieldValue);
            createPage({
                path: `/tags/${slug}/`,
                component: tagsTemplate,
                context: {
                    slug: `/tags/${slug}/`,
                    tag: tag,
                    tagValue: tag.fieldValue
                },
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};