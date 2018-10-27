import styled from "styled-components"
import styles from "./styles"

const MainHeader = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  color: #000;
`

const SubHeader = styled.h3`
  background-color: ${styles.blue};
  border-radius: 15px 5px 15px 5px;
  box-shadow: 1px 1px 6px 0 ${styles.shadow};
  color: #fff;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  margin-left: -12px;
  padding: 8px;
`

const TagHeader = styled.h3`
  color: ${props => props.color};
  padding-left: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.65rem;
  position: relative;
  margin-bottom: 0.2rem !important;
  &::before {
    background: ${props => props.color};
    content: "";
    height: 2px;
    left: 2px;
    position: absolute;
    top: 4px;
    width: 12px;
  }
`



export {MainHeader, SubHeader, TagHeader}
