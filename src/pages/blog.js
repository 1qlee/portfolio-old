import React from "react"
import { graphql } from "gatsby"
import {Container} from "../components/containers"
import {MainContainer, MainBlock} from "../components/main"
import {Excerpt} from "../components/post"

import "./css/reset.css"

export default ({ data }) => (
  <MainContainer>
    <MainBlock className="clear-nav">
      <Container>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Excerpt key={node.id}>
            <a href={"/blog" + node.fields.slug}>
              {node.frontmatter.title}
            </a>
            <p>{node.frontmatter.date}</p>
          </Excerpt>
        ))}
      </Container>
    </MainBlock>
  </MainContainer>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
