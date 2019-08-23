const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(
    `
      query {
        allWordpressPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,

    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allWordpressPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
