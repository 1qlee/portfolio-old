import styled from "styled-components"

const FlexContainer = styled.div`
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  &.is-mobile {
    @media only screen and (max-width: 840px) {
      flex-direction: column-reverse;
    }
  }
  @media only screen and (max-width: 1320px) {
    padding: 0 1rem;
  }
  @media only screen and (max-width: 840px) {
    flex-direction: column;
  }
`

const Container = styled.div`
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1320px) {
    padding: 0 1rem;
  }
`


export {FlexContainer, Container}
