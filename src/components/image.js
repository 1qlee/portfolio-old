import React from "react"
import styled from "styled-components"
import styles from "./styles"
import domahub from "../../public/static/images/domahub_ss.png"
import zltech from "../../public/static/images/zl_ss.png"
import wonkyu from "../../public/static/images/wonkyu_profile.jpg"
import tasker from "../../public/static/images/tasker_ss.png"

const ImageContainer = styled.img`
  animation: 0.6s popIn cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 5px;
  box-shadow: 0 2px 30px 0 ${styles.shadow};
  display: block;
  margin: 0 auto;
  width: 400px;
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

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.showImage = this.showImage.bind(this);
  }

  // Method to show the proper image based on vars
  showImage() {
    if (window.location.pathname === "/") {
      return wonkyu;
    }
    else {
      switch(this.props.color) {
        case styles.green:
          return domahub;
        case styles.red:
          return zltech;
        case styles.purple:
          return tasker;
        default:
          return domahub;
      }
    }
  }

  render() {
    return(
      <ImageContainer src={this.showImage()} color={this.props.color} alt="Relevant screenshot of relevant website"/>
    )
  }
}

export default Image
