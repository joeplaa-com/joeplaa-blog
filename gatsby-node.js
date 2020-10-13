/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');
    const recommendedPostTemplate = path.resolve('src/templates/recommendedPostTemplate.tsx');

    return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
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

        const blogPosts = result.data.allMdx.nodes.filter(node => node.fileAbsolutePath.includes('/content/blog/'));
        const recommendedPosts = result.data.allMdx.nodes.filter(node => node.fileAbsolutePath.includes('/content/recommended/'));

        // create page for each mdx blog node
        blogPosts.forEach((post, index) => {
            const previous =
                index === blogPosts.length - 1 ? null : blogPosts[index + 1];
            const next = index === 0 ? null : blogPosts[index - 1];

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
        recommendedPosts.forEach((post, index) => {
            const previous =
                index === recommendedPosts.length - 1 ? null : recommendedPosts[index + 1];
            const next = index === 0 ? null : recommendedPosts[index - 1];

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