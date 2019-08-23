import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
