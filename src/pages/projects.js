import React from "react"
import styles from "../components/styles"
import {MainContainer} from "../components/main/main"
import Content from "../components/content"
import {TagHeader} from "../components/headers"
import Tag from "../components/tag"

export default () => (
  <MainContainer>
    <Content className="fade-in-down">
      <h1>Tasker</h1>
      <TagHeader color={styles.purple}>Task Management App</TagHeader>
      <p>
        A CRUD web application for creating and managing tasks by organizing them into
        lists.
      </p>
    </Content>
    <Content className="is-flex fade-in-up">
      <Tag color={styles.purple}>JavaScript</Tag>
      <Tag color={styles.purple}>Node.js</Tag>
      <Tag color={styles.purple}>MySQL</Tag>
      <Tag color={styles.purple}>Sass</Tag>
    </Content>
  </MainContainer>
)
