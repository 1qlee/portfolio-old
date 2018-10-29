import React from "react"
import { graphql } from "gatsby"
import {MainContainer, MainBlock, MainColumn} from "../components/main"
import Content from "../components/content"
import {Icon} from "../components/icon"
import Anchor from "../components/anchor"
import ButtonLink from "../components/button"
import SocialBar from "../components/socialBar"
import {FlexContainer} from "../components/containers"
import {ImageContainer, Image} from "../components/image"

import AtIcon from "../../assets/at.svg"
import wonkyu from "./wonkyu_profile.jpg"

import "./css/reset.css"

export default ({ data }) => (
  <MainContainer>
    <MainBlock className="clear-nav">
      <FlexContainer>
        <MainColumn>
          <ImageContainer>
            <Image src={wonkyu} />
          </ImageContainer>
        </MainColumn>
        <MainColumn>
          <Content className="fade-in-down">
            <h1>Wonkyu Lee</h1>
            <small className="is-grey">Pronunciation: [one-queue, 1-Q, won-kyoo]</small>
            <p>
              A web developer from NYC that designs and builds websites.
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
