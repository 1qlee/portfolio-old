import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import {MainContainer, MainBlock, MainColumn} from "../components/main"
import Content from "../components/content"
import {Icon} from "../components/icon"
import Anchor from "../components/anchor"
import ButtonLink from "../components/button"
import SocialBar from "../components/socialBar"
import {FlexContainer} from "../components/containers"
import {ProfileImage} from "../components/image"

import AtIcon from "../../assets/at.svg"
import favicon from "../images/favicon.ico"

import "./css/reset.css"

export default ({ data }) => (
  <MainContainer style={{overflow: "scroll"}} path="index">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home - Wonkyu Lee</title>
      <link rel="canonical" href="https://1qlee.com" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <MainBlock className="clear-nav">
      <FlexContainer>
        <MainColumn>
          <ProfileImage />
        </MainColumn>
        <MainColumn>
          <Content className="fade-in-down">
            <h1>Wonkyu Lee</h1>
            <small className="is-grey">Pronunciation: [one-queue, 1-Q, won-kyoo]</small>
            <p>
              A web developer from NYC building and designing websites.
              Spent the past two years working on <Anchor href="https://www.domahub.com" target="_blank" rel="noreferrer">DomaHub</Anchor>, a domain management platform.
            </p>
          </Content>
          <Content className="is-flex is-mobile fade-in-up">
            <ButtonLink href={data.site.siteMetadata.email}>
              <Icon>
                <AtIcon />
              </Icon>
              <small>Email Me</small>
            </ButtonLink>
            <SocialBar />
          </Content>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
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
