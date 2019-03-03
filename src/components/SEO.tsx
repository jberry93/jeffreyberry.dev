import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Props {
    title: string;
    description: string;
    pathname: string;
    article: boolean;
}

interface SEOObject {
    title: string;
    description: string;
    url: string;
}

interface RenderProps {
    site: {
        siteMetadata: {
            defaultTitle: string;
            titleTemplate: string;
            defaultDescription: string;
            siteUrl: string;
        }
    }
}

const SEO: React.FC<Props> = ({ title, description, pathname, article }: Props) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    titleTemplate,
                    defaultDescription,
                    siteUrl,
                }
            },
        }: RenderProps) => {
            const seo: SEOObject = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                url: `${siteUrl}${pathname || '/'}`,
            };

            return (
                <Helmet title={seo.title} titleTemplate={titleTemplate}>
                    <meta name="description" content={seo.description}/>
                    {seo.url && <meta property="og:url" content={seo.url}/>}
                    {seo.title && (
                        <>
                            <meta property="og:title" content={seo.title}/>
                            <meta property="twitter:title" content={seo.title}/>
                        </>
                    )}
                    {seo.description && (
                        <>
                            <meta property="og:description" content={seo.description}/>
                            <meta property="twitter:description" content={seo.description}/>
                        </>
                    )}

                    {(article ? true : null) && <meta property="og:type" content="article"/>}
                </Helmet>
            );
        }}
    />
);

export default SEO;

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
            }
        }
    }
`;
