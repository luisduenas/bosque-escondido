import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allDatoCmsBlogpost.nodes

  if (posts.length === 0) {
    return (
      <Layout title={siteTitle}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={siteTitle}>
      <SEO title="Blog" />
      <ol
        style={{
          listStyle: `none`,
          paddingLeft: 0,
        }}
      >
        {posts.map(post => {
          const title = post.title

          return (
            <li
              key={post.slug}
              style={{
                borderBottom: "solid gray 1px",
              }}
            >
              <article
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.publishdate}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <Link to="/">Go back to the homepage</Link>
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
