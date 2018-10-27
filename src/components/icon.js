import styled from "styled-components"
import styles from "./styles"

const Icon = styled.i`
  display: block;
  height: 20px;
  width: 20px;
  line-height: 20px;
  svg {
    height: 20px;
    width: 20px;
    line-height: 20px;
  }
`

const IconLink = styled.a`
  display: block;
  color: ${styles.text};
  cursor: pointer;
  height: 20px;
  width: 20px;
  line-height: 20px;
  &.social-icon {
    svg {
      transition: color 0.2s ease, opacity 0.2s ease;
      color: ${styles.grey};
      opacity: 0.6;
    }
    &:hover {
      svg {
        color: #444;
        opacity: 1;
      }
    }
  }
  svg {
    color: ${styles.text};
    height: 20px;
    width: 20px;
    line-height: 20px;
  }
`

export {Icon, IconLink}
