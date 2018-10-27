import styled from "styled-components"

const MainLeft = styled.div`
  height: 100%;
  padding: 0 1rem;
  width: 50%;
`

const MainLeftContent = styled.div`
  animation: fadeInLeft forwards 0.4s;
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export {MainLeft, MainLeftContent}
