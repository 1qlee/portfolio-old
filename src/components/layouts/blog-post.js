import React from "react"
import { graphql } from "gatsby"
import {Container} from "../containers"
import {Main, MainBlock} from "../main"
import {Post} from "../post"
import NavBar from "../nav"
import Content from "../content"
import styles from "../styles"

import "../../pages/css/reset.css"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Main>
      <NavBar color={styles.blue} path="blog" />
      <MainBlock className="clear-nav">
        <Container>
          <Post>
            <Content>
              <h1>{post.frontmatter.title}</h1>
              <p className="is-grey">{post.frontmatter.date}</p>
              <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
            </Content>
          </Post>
        </Container>
      </MainBlock>
    </Main>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tag
      }
    }
  }
`
