import React from "react"
import { graphql, Link } from "gatsby"
import styles from "../components/styles"
import NavBar from "../components/nav"
import {BlogContainer, Container} from "../components/containers"
import {Main} from "../components/main/main"
import Content from "../components/content"
import {Card, CardContent} from "../components/card"

export default ({ data }) => (
  <Main color={styles.teal}>
    <Container>
      <NavBar color={styles.teal} />
      <BlogContainer>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Card key={node.id} photo={node.frontmatter.photo} href={"/blog" + node.fields.slug}>
            <CardContent>
              <small className="is-light">{node.frontmatter.tag}</small>
              <h3>
                {node.frontmatter.title}
              </h3>
              <small className="is-light">{node.frontmatter.date}</small>
              <p>{node.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </BlogContainer>
    </Container>
  </Main>
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
            date(formatString: "MMMM DD, YYYY")
            tag
            photo
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
