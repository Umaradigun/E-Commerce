module.exports = {
  siteMetadata: {
    title: `e-shop`,
    description: `Simple e-commerce website in react.`,
    author: `@Adigun Faruk`,
    siteUrl: "",
    siteLanguage: `en`,
    ogLanguage: `en`,
    headline: `E-Shop`,
    twitter: `@faruk_adigun`,
    facebook: `Adigun Faruk`,
    banner: `/preview.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `e-shop`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#e7ab3c`,
        display: `minimal-ui`,
        icon: `src/images/placeholder.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
