import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import { MainLayout } from '../layouts';
import { SEO } from '../components';

interface PageContextChild {
    fields: {
        slug: string,
    },
    frontmatter: {
        title: string,
    },
}

interface Props {
    pageContext: {
        previous: PageContextChild,
        next: PageContextChild,
    },
    data: {
        site: {
            siteMetadata: {
                title: string,
                author: string,
            },
        },
        markdownRemark: {
            id: string,
            excerpt: string,
            html: string,
            frontmatter: {
                title: string,
                date: string,
                description: string,
            },
        },
    },
}

interface State {}

export default class BlogPostTemplate extends Component<Props, State> {
    public render() {
        const post = this.props.data.markdownRemark;
        const { previous, next } = this.props.pageContext;

        return (
            <MainLayout>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: post.html }}/>
                <ul>
                    <li>{previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}</li>
                    <li>{next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}</li>
                </ul>
            </MainLayout>
        );
    }
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
