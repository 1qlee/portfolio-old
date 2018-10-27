import React from "react"
import styles from "../components/styles"
import {MainContainer} from "../components/main/main"
import {MainRightContent} from "../components/main/mainRight"
import Content from "../components/content"
import {TagHeader} from "../components/headers"

export default () => (
  <MainContainer>
    <MainRightContent>
      <Content className="fade-in-down" id="domahub">
        <h1>DomaHub</h1>
        <TagHeader color={styles.green}>Domain management platform</TagHeader>
        <p><small className="is-grey">Co-founder &#38; Developer &#124; July 2016 - Current</small></p>
        <p>
          As co-founder (with my brother), I grew DomaHub into a platform used by hundreds of domainers. I was in charge of front-end development as well as marketing
          and other business functions.
        </p>
      </Content>
    </MainRightContent>
    <MainRightContent>
      <Content id="zltech">
        <h1>ZL Technologies</h1>
        <TagHeader color={styles.red}>Information systems software</TagHeader>
        <p><small className="is-grey">Product Specialist &#124; July 2015 - April 2016</small></p>
        <p>
          I was in a hybrid role between two teams, working in both Sales Support as well as Marketing. My focus was primarily on understanding the software and effectively communicating it to our customers through marketing campaigns, RFP's, sales meetings, etc.
        </p>
      </Content>
    </MainRightContent>
  </MainContainer>
)
