import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return(
    <div>
    <h1>{data.allMarkdownRemark.totalCount}</h1>
    <p>{data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}</p>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
