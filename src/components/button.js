import styled from "styled-components"
import styles from "./styles"

const ButtonLink = styled.a`
  align-items: center;
  background: ${styles.blue};
  border-radius: 25px;
  box-shadow: 0 4px 20px 0 ${styles.shadow};
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "Rubik";
  padding: 0.5rem 1rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  &:active {
    box-shadow: 0 2px 4px 0 ${styles.shadow};
    transform: translateY(1px);
  }
  i {
    margin-right: 0.3rem;
  }
`

export default ButtonLink
