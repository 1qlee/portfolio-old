import React from "react"
import styled from "styled-components"
import styles from "../styles"

const MainRightContainer = styled.div`
  padding: 0 1rem;
  height: 100%;
  overflow-y: auto;
  width: 50%;
`

const MainRightContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

class MainRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const scrollValue = document.getElementById("main-right").scrollTop;
    let pathname = window.location.pathname;
    let newColor = null;

    if (pathname === "/experience") {
      if (scrollValue > 200) {
        newColor = styles.red;
        this.props.onScroll(newColor);
      }
      else {
        newColor = styles.green;
        this.props.onScroll(newColor);
      }
    }
    else if (pathname === "/projects") {
      newColor = styles.purple;
      this.props.onScroll(newColor);
    }

  }

  render() {
    return (
      <MainRightContainer onScroll={this.handleScroll} id="main-right">
        {this.props.children}
      </MainRightContainer>
    )
  }
}

export {MainRight, MainRightContent}
