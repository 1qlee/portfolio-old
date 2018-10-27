import styled from "styled-components"
import styles from "./styles"

const FlexContainer = styled.div`
  background: #fff;
  border-radius: 0 0 20px 20px;
  padding: 120px 0;
  display: flex;
  height: calc(100% - 71px);
`

const BlogContainer = styled.div`
  display: flex;
  height: calc(100% - 71px);
  flex-wrap: wrap;
  padding: 1rem 2rem;
  overflow-y: auto;
  margin: 0 auto;
  width: calc(100% - 160px);
`

const Container = styled.div`
  background: #fff;
  box-shadow: 2px 5px 20px ${styles.shadow};
  border-radius: 20px;
  height: calc(100vh - 240px);
  margin: 0 auto;
  max-width: 1200px;
`


export {FlexContainer, BlogContainer, Container}
