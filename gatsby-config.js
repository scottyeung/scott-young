require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Scott Young`,
    siteUrl: `https://parodybiz.co.uk`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157799812-1",
        head: false,
        anonymize: true,
      },
    },
  ],
}
