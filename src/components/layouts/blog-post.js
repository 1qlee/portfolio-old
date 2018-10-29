import React from "react"
import { graphql } from "gatsby"
import {Container} from "../containers"
import {MainContainer, MainBlock} from "../main"
import {Post} from "../post"
import Content from "../content"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <MainContainer>
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
    </MainContainer>
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
