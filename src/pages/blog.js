import React from "react"
import { graphql } from "gatsby"
import {Container} from "../components/containers"
import {MainContainer, MainBlock} from "../components/main"
import {Excerpt} from "../components/post"
import Content from "../components/content"

import "./css/reset.css"

export default ({ data }) => (
  <MainContainer>
    <MainBlock className="clear-nav">
      <Container>
        <Content>
          <h1>2018</h1>
        </Content>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Excerpt key={node.id}>
            <p>{node.frontmatter.date}</p>
            <a href={"/blog" + node.fields.slug}>
              {node.frontmatter.title}
            </a>
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
            date(formatString: "MMM DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
