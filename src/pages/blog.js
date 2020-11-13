import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "ui"

const SecondPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allDatoCmsBlogpost.nodes

  if (posts.length === 0) {
    return (
      <Layout title={siteTitle}>
        <SEO title="All posts" />
        <Box as="p">
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </Box>
      </Layout>
    )
  }

  return (
    <Layout title={siteTitle}>
      <SEO title="Blog" />
      <Box
        as="ol"
        __css={{
          listStyle: `none`,
          paddingLeft: 0,
        }}
      >
        {posts.map(post => {
          const title = post.title

          return (
            <Box
              as="li"
              key={post.slug}
              __css={{
                borderBottom: "solid gray 1px",
                mb: 4,
              }}
            >
              <Link
                to={post.slug}
                itemProp="url"
                sx={{
                  textDecoration: "none",
                }}
              >
                <Box
                  as="article"
                  itemScope
                  itemType="http://schema.org/Article"
                  __css={{
                    mb: 3,
                  }}
                >
                  <Box as="header">
                    <Heading sa="h2">
                      <Box as="span" itemProp="headline">
                        {title}
                      </Box>
                    </Heading>
                    <Box as="small">{post.publishdate}</Box>
                  </Box>
                  <Box as="section">
                    <Box
                      __css={{
                        mt: 2,
                        color: "text",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </Box>
                </Box>
              </Link>
            </Box>
          )
        })}
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Link to="/">Go back to the homepage</Link>
      </Box>
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allDatoCmsBlogpost(sort: { fields: [publishdate], order: DESC }) {
      nodes {
        slug
        publishdate(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
