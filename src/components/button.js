import styled from "styled-components"
import styles from "./styles"

const ButtonLink = styled.a`
  align-items: center;
  background: ${styles.blue};
  border-radius: 25px;
  box-shadow: 0 4px 20px 0 ${styles.shadow};
  border: 3px solid ${styles.blue};
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  font-family: "Karla";
  padding: 0.4rem 0.9rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  &:active {
    box-shadow: 0 2px 4px 0px ${styles.shadow};
    transform: translateY(1px);
  }
  &:hover {
    background-color: ${styles.white};
    color: ${styles.blue};
  }
  & > i {
    margin-right: 0.3rem;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

export default ButtonLink
