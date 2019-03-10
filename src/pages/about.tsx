import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { css } from 'glamor';

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

        const sectionStyle = css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        });

        const h1Style = css({
            textAlign: 'center',
            fontSize: 32,
        });

        const divWrapperStyle = css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        });

        const linksStyle = css({ fontSize: 18 });

        return (
            <MainLayout>
                <SEO title="About"/>
                <section {...sectionStyle}>
                    <h1 {...h1Style}>Jeffrey Berry</h1>
                    <div {...divWrapperStyle}>
                        <a
                            href={github}
                            target="_blank"
                            {...linksStyle}
                        >Github</a>
                        <a
                            href={linkedin}
                            target="_blank"
                            {...linksStyle}
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
