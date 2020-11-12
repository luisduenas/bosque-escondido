import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"

export default ({ data }) => {
  const { blogpost } = data
  return (
    <Layout>
      <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <HelmetDatoCms seo={blogpost.seoMetaTags} />
        <div>
          <h1>{blogpost.title}</h1>
          <div>
            <Img
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "450px",
              }}
              fluid={blogpost.hero.fluid}
            />
          </div>
          <div
            style={{ paddingTop: "25px" }}
            dangerouslySetInnerHTML={{
              __html: blogpost.contentNode.childMarkdownRemark.html,
            }}
          />
        </div>
        <div>
          <Bio author={blogpost.author} />
        </div>
      </div>
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
          fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
`
