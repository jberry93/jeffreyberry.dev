import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../layouts';
import { SEO } from '../components/SEO';

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
                <section style={{
                    margin: '10px auto',
                    maxWidth: 650,
                    padding: '0 10px',
                }}>
                    {posts.map(({ node }) => {
                        const title: string = node.frontmatter.title || node.fields.slug;

                        return (
                            <div key={node.fields.slug}>
                                <h3><Link to={node.fields.slug}>{title}</Link></h3>
                                <small>{node.frontmatter.date}</small>
                                <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}/>
                            </div>
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
                    }
                }
            }
        }
    }
`;
