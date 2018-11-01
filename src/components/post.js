import styled from "styled-components"
import styles from "./styles"

const Blog = styled.div`
  background: ${styles.white};
  padding: 3rem 0;
  display: block;
  min-height: calc(100% - 115px);
  box-sizing: border-box;
  width: 100%;
`

const Excerpt = styled.div`
  display: flex;
  p {
    color: ${styles.grey};
    margin-right: 1rem;
  }
  a {
    color: ${styles.white};
    position: relative;
    padding: 0 4px;
    z-index: 1;
    &:active {
      color: ${styles.blueLight};
    }
    &::after {
      background: ${styles.blue};
      bottom: 0;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      transition: height 0.2s ease;
      width: 100%;
      z-index: -1;
    }
    &:hover {
      color: ${styles.text};
      &::after {
        height: 2px;
      }
    }
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Post = styled.div`
  max-width: 800px;
  h4 {
    margin-top: 1rem;
  }
  ul {
    list-style-type: disc;
    margin: 1rem 0 1rem 1.1rem;
  }
  a {
    transition: box-shadow 0.2s ease;
    text-decoration: none;
    color: ${styles.blue};
    box-shadow: inset 0 -2px 0 0 ${styles.blue};
    &:active {
      color: ${styles.blueLight};
    }
    &:hover {
      box-shadow: none;
    }
  }
  code {
    background-color: rgba(0,106,245,0.2);
    padding: 2px;
  }
`

export {Blog, Excerpt, Post}
