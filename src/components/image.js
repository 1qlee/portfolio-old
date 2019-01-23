import React from "react"
import styled from "styled-components"
import styles from "./styles"

const Image = styled.img`
  animation: 0.6s popIn cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 10px 30px 0 ${styles.shadow};
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
  @media only screen and (max-width: 840px) {
    margin: 0 auto;
  }
`

class ImageContainer extends React.Component {
  state = {
    image: null
  }

  componentDidMount() {
    this.setState({
      image: this.props.image
    })
  }

  handleMouseEnter = () => {
    this.setState({
      image: this.props.hoverImage
    })
  }

  handleMouseLeave = () => {
    this.setState({
      image: this.props.image
    })
  }

  handleClick = () => {
    this.setState({
      image: this.props.clickImage
    })
  }

  render() {
    return (
      <figure>
        <Image src={this.state.image} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick}/>
      </figure>
    )
  }
}

export {ImageContainer, Image}
