const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlogpost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsBlogpost.edges.map(({ node: blogpost }) => {
        console.log(blogpost)
        createPage({
          path: `blog/${blogpost.slug}`,
          component: path.resolve(`./src/templates/blogpost.js`),
          context: {
            slug: blogpost.slug,
          },
        })
      })
      resolve()
    })
  })
}
