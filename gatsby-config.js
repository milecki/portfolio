module.exports = {
  siteMetadata: {
    title: `kulecki`,
    description: `Michał Kulecki - React Front-End Developer.`,
    siteUrl: `https://kulecki.me`,
    author: `milecki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `pl`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kulecki website`,
        short_name: `kulecki`,
        start_url: `/`,
        background_color: `#55198c`,
        theme_color: `#55198c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
