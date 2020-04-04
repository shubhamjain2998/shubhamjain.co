import React from "react"

import Header from "../components/header/header"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <Header />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <h3>You just hit a route that doesn&#39;t exist... the sadness.</h3>
  </>
)

export default NotFoundPage
