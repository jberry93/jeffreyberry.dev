import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import { SEO } from '../components';
import { MainLayout } from '../layouts';

interface Group {
    fieldValue: string;
    totalCount: number;
}

interface Props {
    data: {
        allMarkdownRemark: {
            group: Group[],
        },
        site: {
            siteMetadata: {
                title: string,
            }
        }
    }
}

interface State {}

export default class TagsPage extends Component<Props, State> {
    public render() {
        const {
            data: {
                allMarkdownRemark: { group },
            }
        } = this.props;

        return (
            <MainLayout>
                <SEO title="Tags"/>
                <section>
                    <h1>Tags</h1>
                    <ul className="tags-list">
                        {group.map((tag: any) => (
                            <li key={tag.fieldValue}>
                                <Link to={`/tags/${kebabCase(tag.fieldValue)}`} className={[tag.fieldValue, 'tag-link'].join(' ')}>
                                    {tag.fieldValue} ({tag.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </MainLayout>
        );
    }
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 2000, filter: { frontmatter: { published: { ne: false } } }) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
