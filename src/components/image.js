import styled from "styled-components"
import styles from "./styles"

const ImageContainer = styled.figure`
  display: block;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    left: 1rem;
    top: 2rem;
    border: 8px solid rgba(0,0,0,0.12);
    height: 100%;
    width: 440px;
    z-index: -1;
  }
`

const Image = styled.img`
  animation: 0.6s popIn cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 2px 30px 0 ${styles.shadow};
  border: 8px solid ${styles.white};
  display: block;
  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
    }
  }
`

export {ImageContainer, Image}
