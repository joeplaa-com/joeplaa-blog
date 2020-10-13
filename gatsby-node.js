/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');
    const recommendedPostTemplate = path.resolve('src/templates/recommendedPostTemplate.tsx');

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
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
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

        // create page for each mdx blog node
        blogs.forEach((post, index) => {
            const previous =
                index === blogs.length - 1 ? null : blogs[index + 1];
            const next = index === 0 ? null : blogs[index - 1];

            createPage({
                path: post.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: post.fields.slug,
                    previous,
                    next,
                },
            });
        });

        // create page for each mdx recommended node
        recommended.forEach((post, index) => {
            const previous =
                index === recommended.length - 1 ? null : recommended[index + 1];
            const next = index === 0 ? null : recommended[index - 1];

            createPage({
                path: post.fields.slug,
                component: recommendedPostTemplate,
                context: {
                    slug: post.fields.slug,
                    previous,
                    next,
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