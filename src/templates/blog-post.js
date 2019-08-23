import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import "../styles.css"

export const result = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do YYYY")
      content
    }
  }
`

function BlogPost(props) {
  function createMarkup() {
    return { __html: props.data.wordpressPost.content }
  }

  return (
    <div>
      <Navbar />
      <h1>{props.data.wordpressPost.title}</h1>
      <p>{props.data.wordpressPost.date}</p>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default BlogPost
