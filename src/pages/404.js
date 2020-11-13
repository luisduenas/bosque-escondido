import React from "react"
import { Box, Heading } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading as="h1">404: Not Found</Heading>
    <Box as="p">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Box>
  </Layout>
)

export default NotFoundPage
