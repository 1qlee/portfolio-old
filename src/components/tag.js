import styled from "styled-components"
import styles from "./styles"

const Tag = styled.span`
  align-items: center;
  background: ${props => props.color};
  border-radius: 25px;
  box-shadow: 0 4px 20px 0 ${styles.shadow};
  color: #fff;
  display: inline-flex;
  font-family: "Rubik";
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`

export default Tag
