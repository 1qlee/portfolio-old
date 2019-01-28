import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import {Container} from "../components/containers"
import {Excerpt, Blog} from "../components/post"
import {MainContainer} from "../components/main"
import Anchor from "../components/anchor"
import Content from "../components/content"

import favicon from "../images/favicon.ico"

import "./css/reset.css"

export default ({ data }) => (
  <MainContainer path="blog">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Blog - Wonkyu Lee</title>
      <link rel="canonical" href="https://1qlee.com" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <Blog>
      <Container>
        <Content>
          <h1>2018</h1>
        </Content>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Excerpt key={node.id}>
            <p>{node.frontmatter.date}</p>
            <Anchor href={"/blog" + node.fields.slug}>
              {node.frontmatter.title}
            </Anchor>
          </Excerpt>
        ))}
      </Container>
    </Blog>
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
