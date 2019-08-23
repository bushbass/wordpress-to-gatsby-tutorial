import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from "../components/Navbar"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      wordpressPost(title: { eq: "Algorithms!" }) {
        title
        content
      }
    }
  `)

  return (
    <div>
      <Navbar />
      <ul>
        hi
        <h1>{data.wordpressPost.title}</h1>
        <p>{data.wordpressPost.content}</p>
      </ul>
    </div>
  )
}

export default Blog
