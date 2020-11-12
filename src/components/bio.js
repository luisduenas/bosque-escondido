import React from "react"
import Image from "gatsby-image"

const Bio = ({ author }) => {
  return (
    <div>
      {author.avatar && (
        <Image
          fluid={author.avatar.fluid}
          alt={author.name}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author.name && (
        <p>
          Written by <strong>{author.name}</strong> {author.summary || null}
        </p>
      )}
      {author.social && (
        <p>
          <a href={author.url}>{author.social.name}</a>
        </p>
      )}
    </div>
  )
}

export default Bio
