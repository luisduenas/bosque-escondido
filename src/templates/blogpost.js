import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Box, Heading } from "theme-ui"

import Layout from "../components/layout"
import Bio from "../components/bio"

export default ({ data }) => {
  const { blogpost } = data
  return (
    <Layout>
      <Box style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <HelmetDatoCms seo={blogpost.seoMetaTags} />
        <Box>
          <Heading as="h1">{blogpost.title}</Heading>
          <Box>
            <Img
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "450px",
              }}
              fluid={blogpost.hero.fluid}
            />
          </Box>
          <Box
            style={{ paddingTop: "25px" }}
            dangerouslySetInnerHTML={{
              __html: blogpost.contentNode.childMarkdownRemark.html,
            }}
          />
        </Box>
        <Box>
          <Bio author={blogpost.author} />
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    blogpost: datoCmsBlogpost(slug: { eq: $slug }) {
      hero {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      title
      author {
        name
        summary
        url
        social {
          name
          icon
        }
        avatar {
          fixed(width: 50, height: 50) {
            base64
            tracedSVG
            aspectRatio
            sizes
            src
            srcSet
            height
            width
          }
        }
      }
    }
  }
`
