import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';

import { MainLayout } from '../layouts';
import { SEO } from '../components';

interface Edge {
    node: {
        excerpt: string,
        frontmatter: {
            date: string,
            title: string,
            description: string,
        },
        fields: {
            slug: string,
        },
    },
}

interface Props {
    data: {
        site: {
            siteMetadata: {
                title: string,
            },
        },
        allMarkdownRemark: {
            edges: Edge[],
        },
    },
};

interface State {};

export default class IndexPage extends Component<Props, State> {
    public render() {
        const { data } = this.props;
        const posts = data.allMarkdownRemark.edges;

        return (
            <MainLayout>
                <SEO title="All Posts" keywords={['blog', 'gatsby', 'typescript', 'react']}/>
                <section className="posts-wrapper">
                    {posts.map(({ node }) => {
                        const title: string = node.frontmatter.title || node.fields.slug;

                        return (
                            <article key={node.fields.slug} className="post-article">
                                <div className="post-info-wrapper">
                                    <header className="post-title">
                                        <Link to={node.fields.slug}>
                                            {title}
                                        </Link>
                                    </header>
                                    <small className="post-date">
                                        {node.frontmatter.date}
                                    </small>
                                </div>
                                <footer
                                    dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}
                                    className="post-description"
                                />
                            </article>
                        );
                    })}
                </section>
            </MainLayout>
        );
    }
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;
