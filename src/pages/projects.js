import React from "react"
import { Helmet } from "react-helmet"
import styles from "../components/styles"
import {FlexContainer} from "../components/containers"
import {Image, ImageLink} from "../components/image"
import {MainContainer, MainBlock, MainColumn} from "../components/main"
import {TagHeader} from "../components/headers"
import Content from "../components/content"
import Tag from "../components/tag"

import tasker from "../images/tasker.png"
import favicon from "../images/favicon.ico"

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
          <figure>
            <ImageLink href="https://github.com/1qlee/chatwick" rel="noreferrer" target="_blank" color={styles.mint} text="View Github">
              <Image src="https://place-hold.it/420x250/ddd/444/fff/?text=Work%20in%20Progress&fontsize=24" />
            </ImageLink>
          </figure>
        </MainColumn>
        <MainColumn>
          <Content className="fade-in-down">
            <h1>Chatwick<span className="is-grey"> (2018)</span></h1>
            <TagHeader color={styles.mint}>Full-stack Application</TagHeader>
            <p>
              A real-time, multi-user chat application built with Socket.IO and React.
            </p>
            <p>
              Set up with a Node back-end to fetch data from a cloud SQL database. Socket.IO to power real-time requests and React for view-rendering.
            </p>
          </Content>
          <Content className="is-flex fade-in-up">
            <Tag color={styles.mint}>React</Tag>
            <Tag color={styles.mint}>Socket.IO</Tag>
            <Tag color={styles.mint}>NodeJS</Tag>
            <Tag color={styles.mint}>Sass</Tag>
            <Tag color={styles.mint}>SQL</Tag>
          </Content>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
    <MainBlock className="has-items-center">
      <FlexContainer className="is-mobile">
        <MainColumn>
          <Content>
            <h1>Tasker</h1>
            <TagHeader color={styles.purple}>Full-stack Application</TagHeader>
            <p>
              A simple web application for creating and managing tasks by organizing them into
              lists.
            </p>
            <p>
              Node / Express back-end to handle database requests. JavaScript for front-end logic and Pug templates for conditional view-rendering.
            </p>
          </Content>
          <Content>
            <Tag color={styles.purple}>JavaScript</Tag>
            <Tag color={styles.purple}>NodeJS</Tag>
            <Tag color={styles.purple}>Pug</Tag>
            <Tag color={styles.purple}>Sass</Tag>
            <Tag color={styles.purple}>SQL</Tag>
          </Content>
        </MainColumn>
        <MainColumn className="is-flex">
          <figure>
            <ImageLink href="https://github.com/1qlee/tasker" rel="noreferrer" target="_blank" color={styles.purple} text="View Github">
              <Image src={tasker} />
            </ImageLink>
          </figure>
        </MainColumn>
      </FlexContainer>
    </MainBlock>
  </MainContainer>
)
