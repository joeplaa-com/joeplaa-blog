/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kebabCase = require("lodash").kebabCase;

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('src/templates/blogPostTemplate.tsx');
    const recommendedTemplate = path.resolve('src/templates/recommendedPostTemplate.tsx');
    const tagsTemplate = path.resolve('src/templates/tagsTemplate.tsx');

    return graphql(`
    {
      blogs: allMdx(
        filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/blog/**/*.mdx" } }
        sort: { fields: [frontmatter___date], order: DESC }
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
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        const blogs = result.data.blogs.nodes;
        const recommended = result.data.recommended.nodes;
        const tags = result.data.tagsGroup.group;

        // create page for each mdx blog node
        blogs.forEach((post, index) => {
            const slug = post.fields.slug;
            createPage({
                path: slug,
                component: blogTemplate,
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
                component: recommendedTemplate,
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