import React from "react"
import { graphql } from "gatsby"
import {MainContainer} from "../components/main/main"
import Content from "../components/content"
import {Icon} from "../components/icon"
import Anchor from "../components/anchor"
import ButtonLink from "../components/button"
import SocialBar from "../components/socialBar"

import AtIcon from "../../assets/at.svg"
import "./css/reset.css"
import "./css/generic.css"

export default ({ data }) => (
  <MainContainer>
    <Content className="fade-in-down">
      <h1>Wonkyu Lee</h1>
      <small className="is-grey">Pronunciation: [one-queue, 1-Q, won-kyoo]</small>
      <p>
        A web developer from NYC who enjoys designing and building websites.
        Spent the past two years working on <Anchor href="https://www.domahub.com" target="_blank" rel="noreferrer">DomaHub</Anchor>, a domain management platform. Currently looking for a full-time front-end developer position.
      </p>
    </Content>
    <Content className="is-flex fade-in-up">
      <ButtonLink href={data.site.siteMetadata.email}>
        <Icon>
          <AtIcon />
        </Icon>
        <small>Email Me</small>
      </ButtonLink>
      <SocialBar />
    </Content>
  </MainContainer>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        email
      }
    }
  }
`
