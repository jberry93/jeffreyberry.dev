module.exports = {
    siteMetadata: {
        author: 'Jeffrey Berry',
        description: 'Personal website for writing, explaining, and ranting',
        siteUrl: 'https://jeffreyberry.dev',
        social: {
            github: 'https://github.com/jberry93',
            linkedin: 'https://www.linkedin.com/in/jeffrey-berry-82154a3a',
        },
        siteName: `jberry`,
    },
    plugins: [
        'gatsby-plugin-typescript',
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
