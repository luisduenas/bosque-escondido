import React from "react"
import PropTypes from "prop-types"
import { Box, Heading } from "theme-ui"
import { Link } from "ui"

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    sx={{
      bg: `primary`,
      marginBottom: `1.45rem`,
    }}
  >
    <Box
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Heading as="h1" sx={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
      <Link to="/blog/">Blog</Link>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
