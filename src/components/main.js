import React from "react"
import styled from "styled-components"
import styles from "./styles"
import NavBar from "./nav"

const Main = styled.div`
  background-color: ${props => props.color};
  padding: 1rem;
  overflow-y: auto;
  transition: background 0.3s ease-in-out;
  height: 100vh;
  width: 100%;
`

const MainColumn = styled.div`
  width: 50%;
  &.is-flex {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

const MainBlock = styled.div`
  background: #fff;
  padding: 180px 0;
  min-height: calc(100vh - 48px);
  width: 100%;
  &.clear-nav {
    min-height: calc(100vh - 180px);
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    // Bind methods
    this.changeColor = this.changeColor.bind(this)
    this.handleScroll = this.handleScroll.bind(this);
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
    })
  }

  // Logic for pathname
  setColor() {
    // Store pathname in a variable
    let pathname = window.location.pathname

    // Initialize main background color based on pathname
    switch(pathname) {
      case "/":
        return styles.blue
      case "/experience":
        return styles.green
      case "/projects":
        return styles.purple
      case "/blog":
        return styles.orange
      default:
        return styles.blue
    }
  }

  handleScroll() {
    const scrollValue = document.getElementById("main").scrollTop
    let pathname = window.location.pathname
    let newColor = null

    if (pathname === "/experience") {
      if (scrollValue > 700) {
        newColor = styles.red
        this.changeColor(newColor)
      }
      else {
        newColor = styles.green
        this.changeColor(newColor)
      }
    }
    else if (pathname === "/projects") {
      newColor = styles.purple
      this.changeColor(newColor)
    }
  }

  render() {
    return (
      <Main id="main" color={this.state.color} onScroll={this.handleScroll}>
        <NavBar color={this.state.color} />
        {this.props.children}
      </Main>
    )
  }
}

export {MainContainer, MainBlock, MainColumn}
