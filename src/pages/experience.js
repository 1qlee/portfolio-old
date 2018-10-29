import React from "react"
import styles from "../components/styles"
import {FlexContainer} from "../components/containers"
import {ImageContainer, Image} from "../components/image"
import {MainContainer, MainBlock, MainColumn} from "../components/main"
import {TagHeader} from "../components/headers"
import Content from "../components/content"

import domahub from "./domahub.png"
import zltech from "./zl.png"

import "./css/reset.css"

export default () => (
  <MainContainer>
    <MainBlock className="clear-nav">
      <FlexContainer>
        <MainColumn>
          <ImageContainer>
            <Image src={domahub} />
          </ImageContainer>
        </MainColumn>
        <MainColumn className="is-flex">
          <Content className="fade-in-down" id="domahub">
            <h1>DomaHub</h1>
            <TagHeader color={styles.green}>Co-founder &#38; Developer &#124; July 2016 - Current</TagHeader>
            <p>
              DomaHub is an online platform for domain name portfolio management.
            </p>
            <p>
              As a
              co-founder (with my brother), I grew DomaHub into a business used by hundreds of domainers. I handle front-end development as well as marketing and other business related functions.
            </p>
          </Content>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
    <MainBlock>
      <FlexContainer>
        <MainColumn>
          <Content id="zltech">
            <h1>ZL Technologies</h1>
            <TagHeader color={styles.red}>Product Specialist &#124; July 2015 - April 2016</TagHeader>
            <p>
              ZL is a leader in the information governance space.
            </p>
            <p>
              I worked in both Sales Support as well as Marketing. My focus was primarily on understanding the software and effectively communicating it to our customers through marketing campaigns, RFP's, sales meetings, etc.
            </p>
          </Content>
        </MainColumn>
        <MainColumn className="is-flex">
          <ImageContainer>
            <Image src={zltech} />
          </ImageContainer>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
  </MainContainer>
)
