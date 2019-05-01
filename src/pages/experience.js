import React from "react"
import styles from "../components/styles"
import { Helmet } from "react-helmet"
import {FlexContainer} from "../components/containers"
import {Image, ImageLink} from "../components/image"
import {MainContainer, MainBlock, MainColumn} from "../components/main"
import {TagHeader} from "../components/headers"
import Content from "../components/content"

import domahub from "../images/domahub.png"
import zltech from "../images/zl.png"
import unicorn from "../images/unicorn.png"
import favicon from "../images/favicon.ico"

import "./css/reset.css"

export default () => (
  <MainContainer path="experience">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Experience - Wonkyu Lee</title>
      <link rel="canonical" href="https://1qlee.com" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <MainBlock className="clear-nav">
      <FlexContainer>
        <MainColumn>
          <figure>
            <ImageLink href="https://domahub.com" rel="noreferrer" target="_blank" color={styles.green} text="View Website">
              <Image src={domahub} alt="Screenshot of DomaHub's Website" />
            </ImageLink>
          </figure>
        </MainColumn>
        <MainColumn className="is-flex">
          <Content className="fade-in-down" id="domahub">
            <h1>DomaHub<span className="is-grey"></span></h1>
            <TagHeader color={styles.green}>Co-founder &#38; Developer</TagHeader>
            <p>
              DomaHub is an online platform for domain name portfolio management.
            </p>
            <p>
              As a
              co-founder (with my brother), I grew DomaHub into a business used by hundreds of domainers. DomaHub was acquired by Efty in 2019.
            </p>
          </Content>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
    <MainBlock className="has-items-center">
      <FlexContainer className="is-mobile">
        <MainColumn>
          <Content id="unicorn">
            <h1>Unicorn Line<span className="is-grey"></span></h1>
            <TagHeader color={styles.blue}>Developer, Freelance</TagHeader>
            <p>
              Unicorn Line represents products from Unicorn Graphics, a commercial printing company.
            </p>
            <p>
              I created an online version of the client's product catalog. I refreshed the catalog design and implemented a CMS for easy editing.
            </p>
          </Content>
        </MainColumn>
        <MainColumn className="is-flex">
          <figure>
            <ImageLink href="https://unicornline.com" rel="noreferrer" target="_blank" color={styles.blue} text="View Website">
              <Image src={unicorn} />
            </ImageLink>
          </figure>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
    <MainBlock className="has-items-center">
      <FlexContainer>
        <MainColumn>
          <figure>
            <ImageLink href="https://zlti.com" rel="noreferrer" target="_blank" color={styles.red} text="View Website">
              <Image src={zltech} />
            </ImageLink>
          </figure>
        </MainColumn>
        <MainColumn className="is-flex">
          <Content id="zltech">
            <h1>ZL Tech<span className="is-grey"></span></h1>
            <TagHeader color={styles.red}>Product Specialist</TagHeader>
            <p>
              ZL is a leading software company in the information governance space.
            </p>
            <p>
              I worked in both Sales Support as well as Marketing. My focus was primarily on understanding the software and effectively communicating it to our customers through marketing campaigns, RFP's, sales meetings, etc.
            </p>
          </Content>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
  </MainContainer>
)
