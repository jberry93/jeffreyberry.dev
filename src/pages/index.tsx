import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { css } from 'glamor';

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

        const postsWrapperStyle = css({
            margin: '10px auto',
            maxWidth: 650,
        });

        const postArticleStyle = css({ marginTop: 20 });

        const postInfoWrapperStyle = css({
            display: 'flex',
            alignItems: 'center',
            '@media(max-width: 768px)': {
                alignItems: 'start',
                flexDirection: 'column',
            },
        });

        const postTitleStyle = css({
            fontSize: 30,
            fontWeight: 'bold',
            '@media(max-width: 768px)': {
                lineHeight: '30px',
                fontSize: 28,
            },
        });

        const postDateStyle = css({
            fontSize: 18,
            marginLeft: 10,
            '@media(max-width: 768px)': {
                marginLeft: 0,
                fontSize: 16,
            },
        });

        const postDescriptionStyle = css({
            fontSize: 20,
            '@media(max-width: 768px)': {
                fontSize: 20,
            },
        });

        return (
            <MainLayout>
                <SEO title="All Posts" keywords={['blog', 'gatsby', 'typescript', 'react']}/>
                <section {...postsWrapperStyle}>
                    {posts.map(({ node }) => {
                        const title: string = node.frontmatter.title || node.fields.slug;

                        return (
                            <article key={node.fields.slug} {...postArticleStyle}>
                                <div {...postInfoWrapperStyle}>
                                    <header {...postTitleStyle}>
                                        <Link to={node.fields.slug}>
                                            {title}
                                        </Link>
                                    </header>
                                    <small {...postDateStyle}>
                                        {node.frontmatter.date}
                                    </small>
                                </div>
                                <footer
                                    dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}
                                    {...postDescriptionStyle}
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
