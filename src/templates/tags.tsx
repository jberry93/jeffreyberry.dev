import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

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
    
        return (
            <MainLayout>
                <SEO title={tag}/>
                <h1>{tagHeader}</h1>
                <ul>
                    {edges.map(({ node }: Edge) => {
                        const { path, title } = node.frontmatter;
    
                        return (
                            <li key={path}>
                                <Link to={path}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Link to="/tags">All tags</Link>
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
