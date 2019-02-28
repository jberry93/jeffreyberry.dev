import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../layouts';

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                siteName: string;
            },
        },
    },
};

interface IndexPageState {}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                siteName,
            },
        },
    },
`;

export default class IndexPage extends Component<IndexPageProps, IndexPageState> {
    readonly name = 'Jeffrey Berry';

    public render() {
        const { siteName } = this.props.data.site.siteMetadata;

        return (
            <MainLayout>
                <h1>My name is {this.name}</h1>
                <p>
                    This site is called <strong>{siteName}</strong>
                </p>
            </MainLayout>
        );
    }
}
