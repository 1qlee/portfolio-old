import React from "react"
import styled from "styled-components"
import styles from "./styles"
import NavBar from "./nav"

const Main = styled.div`
  background-color: ${props => props.color};
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  transition: background 0.3s ease-in-out;
  height: 100vh;
  width: 100%;
`

const MainColumn = styled.div`
  padding: 1rem;
  width: 50%;
  &.is-flex {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width: 840px) {
      justify-content: center;
    }
  }
  @media only screen and (max-width: 840px) {
    width: 100%;
  }
`

const MainBlock = styled.div`
  background: #fff;
  padding: 180px 0;
  min-height: calc(100vh - 48px);
  width: 100%;
  &.clear-nav {
    min-height: calc(100vh - 155px);
  }
  &.has-items-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 1320px) {
    padding: 120px 0;
  }
  @media only screen and (max-width: 840px) {
    padding: 20px 0;
  }
`

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    // Bind methods
    this.changeColor = this.changeColor.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    // States
    this.state = {
      // If index, then use blue styling, else use green
      color: this.setColor(),
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
    // Initialize main background color based on pathname
    switch(this.props.path) {
      case "index":
        return styles.blue
      case "experience":
        return styles.green
      case "projects":
        return styles.purple
      default:
        return styles.blue
    }
  }

  handleScroll() {
    const scrollValue = document.getElementById("main").scrollTop
    let newColor = null

    if (this.props.path === "experience") {
      if (scrollValue > 700) {
        newColor = styles.blue
        this.changeColor(newColor)
        if (scrollValue > 1400) {
          newColor = styles.red
          this.changeColor(newColor)
        }
      }
      else {
        newColor = styles.green
        this.changeColor(newColor)
      }
    }
  }

  render() {
    return (
      <Main id="main" color={this.state.color} onScroll={this.handleScroll}>
        <NavBar color={this.state.color} path={this.props.path} />
        {this.props.children}
      </Main>
    )
  }
}

export {Main, MainContainer, MainBlock, MainColumn}
