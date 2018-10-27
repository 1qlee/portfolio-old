import styled from "styled-components"
import styles from "./styles"

const Card = styled.a`
  background-image: url(${props => props.photo});
  background-size: cover;
  box-shadow: 0 3px 15px 0 ${styles.shadow};
  border-radius: 10px;
  display: block;
  text-decoration: none;
  width: 300px;
  height: 300px;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const CardContent = styled.div`
  background: rgba(0,0,0,0.4);
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  height: 100%;
  width: 100%;
`

export {Card, CardContent}
