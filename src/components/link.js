import React from "react"
import { Box, Link as ThemeUILink } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

export const Link = React.forwardRef((props, ref) => {
  const { to, href } = props

  if (to) {
    return (
      <Box
        ref={ref}
        as={GatsbyLink}
        to={to}
        variant="styles.a"
        {...props}
        __themeKey="links"
      />
    )
  }
  if (href) {
    return <ThemeUILink href={href} {...props} />
  }
  return (
    <Box ref={ref} as="a" variant="styles.a" {...props} __themeKey="links" />
  )
})

export default Link
