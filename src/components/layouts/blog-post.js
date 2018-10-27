import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tag
      }
    }
  }
`
