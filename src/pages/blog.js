import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Navbar from "../components/Navbar"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Navbar />
      <ul>
        {data.allWordpressPost.edges.map(post => (
          <Link key={post.node.slug} to={`/blog/${post.node.slug}`}>
            <li>{post.node.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Blog
