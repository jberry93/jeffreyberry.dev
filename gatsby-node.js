const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogTemplate = path.resolve(`src/templates/blog.tsx`);

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((post, index) => {
            const previous = (index === posts.length - 1) ? null : posts[index + 1].node;
            const next = (index === 0) ? null : posts[index-1].node;

            createPage({
                path: post.node.fields.slug,
                component: blogTemplate,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            });
        });
    });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: 'slug',
            node,
            value,
        });
    }
}
