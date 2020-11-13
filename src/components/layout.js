import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Link } from "theme-ui"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box
        __css={{
          m: `0 auto`,
          maxWidth: 960,
        }}
      >
        <Box as="main">{children}</Box>
        <Box
          as="footer"
          __css={{
            mt: 5,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link href="https://www.gatsbyjs.com">Gatsby</Link>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
