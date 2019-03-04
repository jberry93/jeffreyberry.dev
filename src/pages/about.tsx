import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { MainLayout } from '../layouts';
import { SEO } from '../components';

interface Props {
    data: {
        site: {
            siteMetadata: {
                social: {
                    github: string,
                    linkedin: string,
                },
            },
        },
    },
};

interface State {}

export default class AboutPage extends Component<Props, State> {
    public render() {
        const { data: {
            site: {
                siteMetadata: {
                    social: {
                        github,
                        linkedin,
                    },
                },
            },
        } } = this.props;
        return (
            <MainLayout>
                <SEO title="About"/>
                <section style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: 32,
                    }}>Jeffrey Berry</h1>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                        <a
                            href={github}
                            target="_blank"
                            style={{
                                fontSize: 18,
                            }}
                        >Github</a>
                        <a
                            href={linkedin}
                            target="_blank"
                            style={{
                                fontSize: 18,
                            }}
                        >LinkedIn</a>
                    </div>
                </section>
            </MainLayout>
        );
    }
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                social {
                    github
                    linkedin
                }
            }
        }
    }
`;
