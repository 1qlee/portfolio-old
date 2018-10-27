import React from "react"
import styled from "styled-components"
import styles from "../styles"
import {MainLeft} from "./mainLeft"
import {MainRight} from "./mainRight"
import NavBar from "../nav"
import {Container, FlexContainer} from "../containers"
import Image from "../image"

const Main = styled.div`
  background-image: linear-gradient(125deg, #efe6e6, ${props => props.color});
  background-size: cover;
  padding: 120px;
  height: 100vh;
  transition: background 1s ease;
  width: 100%;
`

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    // States
    this.state = {
      // If index, then use blue styling, else use green
      color: this.setColor()
    }
  }

  // Method to change the state color
  changeColor(newColor) {
    this.setState({
      color: newColor
    });
  }

  // Logic for pathname
  setColor() {
    // Store pathname in a variable
    let pathname = window.location.pathname;

    // Blue on index
    if (pathname === "/") {
      return styles.blue;
    }
    // Green on experience
    else if (pathname === "/experience") {
      return styles.green;
    }
    // Purple on project
    else {
      return styles.purple;
    }
  }

  render() {
    return (
      <Main id="main" color={this.state.color}>
        <Container>
          <NavBar color={this.state.color} />
          <FlexContainer>
            <MainLeft>
              <Image color={this.state.color} />
            </MainLeft>
            <MainRight color={this.state.color} onScroll={this.changeColor}>
              {this.props.children}
            </MainRight>
          </FlexContainer>
        </Container>
      </Main>
    )
  }
}

export {Main, MainContainer}
