import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { css } from 'glamor';

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

        const tagsListStyle = css({
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 20,
            '@media(max-width: 768px)': {
                justifyContent: 'center',
            },
        });

        const tagContainerStyle = css({ margin: 10 });

        return (
            <MainLayout>
                <SEO title="Tags"/>
                <section>
                    <h1>Tags</h1>
                    <ul {...tagsListStyle}>
                        {group.map((tag: any) => (
                            <li key={tag.fieldValue} {...tagContainerStyle}>
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
