import styled from "styled-components"
import styles from "./styles"

const Anchor = styled.a`
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
`

export default Anchor
