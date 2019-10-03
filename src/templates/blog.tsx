import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { css } from 'glamor';

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
                tags: string[],
            },
        },
    },
}

interface State {}

export default class BlogPostTemplate extends Component<Props, State> {
    public render() {
        const post = this.props.data.markdownRemark;
        const tags = this.props.data.markdownRemark.frontmatter.tags;
        const { previous, next } = this.props.pageContext;

        const postContentWrapperStyle = css({
            maxWidth: 750,
            margin: '0 auto',
        });

        const postTitleStyle = css({
            lineHeight: '30px',
            fontSize: 42,
            '@media(max-width: 768px)': {
                fontSize: 28,
            },
        });

        const tagsListStyle = css({
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 20,
        });

        const nextPreviousPostsStyle = css({
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0,
            fontSize: 24,
            '@media(max-width: 768px)': {
                flexDirection: 'column',
                alignItems: 'start',
                fontSize: 18,
                lineHeight: '30px',    
            }
        });

        return (
            <MainLayout>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <article {...postContentWrapperStyle}>
                    <header>
                        <h1 {...postTitleStyle}>{post.frontmatter.title}</h1>
                        <p>{post.frontmatter.date}</p>
                        <ul {...tagsListStyle}>
                            {tags.map((tag: string) => (
                                <li key={tag}>
                                    <Link to={`/tags/${kebabCase(tag)}`} className={[tag, 'tag-link'].join(' ')}>
                                        {tag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </header>
                    <section
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        className="post-content-wrapper"
                    />
                </article>
                <ul {...nextPreviousPostsStyle}>
                    <li>{previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            Previous post: <strong>{previous.frontmatter.title}</strong>
                        </Link>
                    )}</li>
                    <li>{next && (
                        <Link to={next.fields.slug} rel="next">
                            Next post: <strong>{next.frontmatter.title}</strong>
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
                tags
            }
        }
    }
`;
