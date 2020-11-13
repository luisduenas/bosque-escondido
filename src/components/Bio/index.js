import React from "react"
import Image from "gatsby-image"
import { Box, Flex } from "theme-ui"
import { Link } from "ui"

const Bio = ({ author }) => {
  return (
    <Flex>
      {author.avatar && (
        <Image
          fixed={author.avatar.fixed}
          alt={author.name}
          imgStyle={{
            borderRadius: "50%",
          }}
        />
      )}
      <Box
        __css={{
          ml: 3,
        }}
      >
        {author.name && (
          <Box as="p">
            Written by <strong>{author.name}</strong> {author.summary || null}
          </Box>
        )}
        {author.social && (
          <Box as="p">
            <Link href={author.url}>{author.social.name}</Link>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default Bio
