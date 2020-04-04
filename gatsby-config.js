module.exports = {
  siteMetadata: {
    title: `Web Developer Bio | Resume`,
    description: `Portfolio for Shubham Jain.  Javascript and Python Developer. The website shows the technical skills I possess as a web developer and also the projects developed using the same.`,
    keywords: `'Web Developer Bio | Resume', 'Web Developer Portfolio Website', 'Web Developer Skills | Python | JavaScript', 'Project Based On Web Development'`,
    author: `Shubham Jain`,
    siteUrl: `https://theshubhamjain.co/`,
    defaultImage: `/images/profiles.png`,
    twitterUsername: `jains1801`,
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
        description: `Portfolio for Shubham Jain.  Javascript and Python Developer. The website shows about my technical skills and also the projects I have worked on.`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `218720403`,
      },
    },

    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "theshubhamjain.co", // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /404.html
          ErrorDocument 500 /error_pages/500.html
        `,
      },
    },

    `gatsby-plugin-sitemap`,
  ],
}
