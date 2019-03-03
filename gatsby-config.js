module.exports = {
    siteMetadata: {
        title: 'jberry',
        titleTemplate: '%s',
        author: 'Jeffrey Berry',
        description: 'Personal website for writing, explaining, and ranting',
        url: 'https://jeffreyberry.dev',
        social: {
            github: 'https://github.com/jberry93',
            linkedin: 'https://www.linkedin.com/in/jeffrey-berry-82154a3a',
        },
        siteName: `jberry`,
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content`,
                name: 'content',
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
