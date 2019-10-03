module.exports = {
    siteMetadata: {
        title: 'jberry',
        author: 'Jeffrey Berry',
        description: 'Personal website for writing, explaining, and ranting',
        siteUrl: 'https://jeffreyberry.dev',
        social: {
            github: 'https://github.com/jberry93',
            linkedin: 'https://www.linkedin.com/in/jeffrey-berry-82154a3a',
        },
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-feed',
        'gatsby-plugin-offline',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-netlify',
        'gatsby-plugin-glamor',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Jeffrey Berry',
                short_name: 'jberry',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#18FFFF',
                display: 'minimal-ui',
                icon: 'content/assets/gatsby-icon.png',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-prismjs',
                ],
            },
        },
    ],
};
