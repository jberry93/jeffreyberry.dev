import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Meta {
    name?: undefined,
    content: string,
    property: string,
}

interface Props {
    lang?: string,
    description?: string,
    meta?: ConcatArray<Meta>,
    keywords?: string[],
    title: string,
}

interface Query {
    site: {
        siteMetadata: {
            title: string,
            description: string,
            author: string,
        },
    },
}

export function SEO({ description, lang = 'en', meta = [], keywords = [], title }: Props): JSX.Element {
    const { site }: Query = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription: string = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang, }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                { name: 'description', content: metaDescription, },
                { property: 'og:title', content: title, },
                { property: 'og:description', content: metaDescription, },
                { property: 'og:type', content: 'website', },
                { name: 'twitter:card', content: 'summary', },
                { name: 'twitter:creator', content: site.siteMetadata.author, },
                { name: 'twitter:title', content: title, },
                { name: 'twitter:description', content: metaDescription, },
            ].concat(
                keywords && (keywords.length > 0) ?
                { name: 'keywords', content: keywords.join(', '), } :
                []
            ).concat(meta)}
        />
    );
}
