/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon from "../images/profiles.png"

function SEO({ description, lang, meta, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            defaultImage
            twitterUsername
          }
        }
      }
    `
  )

  const author = site.siteMetadata.author
  const metaDescription = description || site.siteMetadata.description
  // const image = `${siteUrl}${defaultImage}`,
  const url = site.siteMetadata.siteUrl

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: url,
    inLanguage: lang,
    mainEntityOfPage: url,
    description: metaDescription,
    name: title,
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: "2020",
    image: {
      "@type": "ImageObject",
      url: `${site.siteMetadata.siteUrl}${site.siteMetadata.defaultImage}`,
    },
    sameAs: [
      "https://twitter.com/jains1801",
      "https://www.linkedin.com/in/jains1801/",
      "https://www.instagram.com/_shubham_jn/?igshid=63ngerjr1yu6",
    ],
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.defaultImage}`,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.defaultImage}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.defaultImage}`,
        },
      ].concat(meta)}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      link={[{ rel: "icon", type: "image/png", href: `${favicon}` }]}
    >
      {
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      }
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
