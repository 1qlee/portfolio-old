import React from "react"
import styles from "../components/styles"
import {FlexContainer} from "../components/containers"
import {ImageContainer, Image} from "../components/image"
import {MainContainer, MainBlock, MainColumn} from "../components/main"
import {TagHeader} from "../components/headers"
import Content from "../components/content"
import Tag from "../components/tag"

import tasker from "./tasker_ss.png"

import "./css/reset.css"

export default () => (
  <MainContainer>
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
            <TagHeader color={styles.purple}>Task Management App</TagHeader>
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
