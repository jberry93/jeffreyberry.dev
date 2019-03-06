const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogTemplate = path.resolve('src/templates/blog.tsx');
    const tagsTemplate = path.resolve('src/templates/tags.tsx');

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
                            tags
                            path
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

        let tags = [];

        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });

        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach(tag => createPage({
            path: `/tags/${_.kebabCase(tag)}`,
            component: tagsTemplate,
            context: { tag },
        }));
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
