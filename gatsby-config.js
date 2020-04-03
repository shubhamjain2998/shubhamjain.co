module.exports = {
  siteMetadata: {
    title: `Shubham Jain Portfolio`,
    description: `A Personal Portfolio`,
    keywords: `'Shubham Jain', 'javascript', 'python', 'Developer', 'software'`,
    author: `Shubham Jain`,
    siteUrl: `https://theshubhamjain.co/`,
    defaultImage: `/images/profiles.png`,
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://www.theshubhamjain.co",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shubham Jain Portfolio`,
        short_name: `SJ Portfolio`,
        description: `A Personal Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#6db5c9`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/profiles.png`,
      },
    },
    `gatsby-plugin-offline`,

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Quicksand", "Raleway", "Playfair Display", "Comic Neue"],
        },
      },
    },
  ],
}
