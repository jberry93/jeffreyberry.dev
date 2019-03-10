import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { css } from 'glamor';

import { MainLayout } from '../layouts';
import { SEO } from '../components';

interface Edge {
    node: {
        frontmatter: {
            title: string,
            path: string,
        }
    }
}

interface Props {
    pageContext: {
        tag: string,
    },
    data: {
        allMarkdownRemark: {
            totalCount: number,
            edges: Edge[],
        }
    }
}

interface State {}

export default class TagsTemplate extends Component<Props, State> {
    public render() {
        const { edges, totalCount } = this.props.data.allMarkdownRemark;
        const { tag } = this.props.pageContext;
        const tagHeader: string = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;
    
        const listStyle = css({
            listStyle: 'none',
            padding: 0,
            fontSize: 24,
            '@media(max-width:768px)': {
                lineHeight: '30px',
            },
        });

        const h1Style = css({
            '@media(max-width:768px)': {
                lineHeight: '30px',
            },
        });

        return (
            <MainLayout>
                <SEO title={tag}/>
                <h1 {...h1Style}>{tagHeader}</h1>
                <ul {...listStyle}>
                    {edges.map(({ node }: Edge) => {
                        const { path, title } = node.frontmatter;
    
                        return (
                            <li key={path}>
                                <Link to={path}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </MainLayout>
        );    
    }
}

export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;
