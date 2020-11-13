import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Box, Heading } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { homepage } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Image fluid={homepage.heroImage.fluid} alt={homepage.title} />
      <Heading as="h1">{homepage.heroText}</Heading>
      <Box
        dangerouslySetInnerHTML={{
          __html: homepage.heroIntroNode.childMarkdownRemark.html,
        }}
      ></Box>
      <hr />
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    homepage: datoCmsLanding(title: { eq: "Homepage" }) {
      title
      heroImage {
        fluid {
          ...GatsbyDatoCmsSizes
        }
      }
      heroText
      heroIntroNode {
        childMarkdownRemark {
          html
          wordCount {
            words
          }
        }
      }
    }
  }
`
