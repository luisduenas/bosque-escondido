import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { homepage } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Image fluid={homepage.heroImage.fluid} alt={homepage.title} />
      <h1>{homepage.heroText}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: homepage.heroIntroNode.childMarkdownRemark.html,
        }}
      ></div>
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
