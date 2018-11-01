import React from "react"
import { Helmet } from "react-helmet"
import styles from "../components/styles"
import {FlexContainer} from "../components/containers"
import {ImageContainer, Image} from "../components/image"
import {MainContainer, MainBlock, MainColumn} from "../components/main"
import {TagHeader} from "../components/headers"
import Content from "../components/content"
import Tag from "../components/tag"

import tasker from "./tasker.png"
import favicon from "./favicon.ico"

import "./css/reset.css"

export default () => (
  <MainContainer path="projects">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Projects - Wonkyu Lee</title>
      <link rel="canonical" href="https://1qlee.com" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <MainBlock className="clear-nav">
      <FlexContainer>
        <MainColumn>
          <ImageContainer>
            <Image src={tasker} />
          </ImageContainer>
        </MainColumn>
        <MainColumn>
          <Content className="fade-in-down">
            <h1>Tasker</h1>
            <TagHeader color={styles.purple}>Developer</TagHeader>
            <p>
              A simple web application for creating and managing tasks by organizing them into
              lists.
            </p>
          </Content>
          <Content className="is-flex fade-in-up">
            <Tag color={styles.purple}>JavaScript</Tag>
            <Tag color={styles.purple}>Node.js</Tag>
            <Tag color={styles.purple}>MySQL</Tag>
            <Tag color={styles.purple}>Sass</Tag>
          </Content>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
  </MainContainer>
)
