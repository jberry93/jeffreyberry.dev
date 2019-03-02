import * as React from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../layouts';

interface Props {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
                date: string;
            },
            html: string;
        },
    },
};

/** @TODO Figure out types for this */
export default function BlogTemplate(props: Props): JSX.Element {
    const {
        data: {
            markdownRemark: {
                frontmatter,
                html,
            },
        },
    } = props;

    return (
        <MainLayout>
            <article style={{
                maxWidth: 700,
                margin: '0 auto',
            }}>
                <header>
                    <h1 style={{
                        fontSize: '32px',
                        lineHeight: '30px',
                        marginTop: '25px',
                    }}>{frontmatter.title}</h1>
                    <strong>{frontmatter.date}</strong>
                </header>
                <section dangerouslySetInnerHTML={{ __html: html }} className="post-content-wrapper"/>
            </article>
        </MainLayout>
    );
}

export const pageQuery: void = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
