import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "./styles"
import {Container} from "./containers"

const Nav = styled.nav`
  background: #fff;
  padding: 2rem 0;
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NavItem = styled.div`
  &:not(:last-child) {
    margin-right: 1rem;
  }
  .nav-link {
    color: ${styles.grey};
    text-decoration: none;
    font-family: "Karla";
    font-size: 14px;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    &.is-active {
      color: #000;
    }
    &:hover {
      color: #000;
    }
  }
`

const Logo = styled.div`
  a {
    background: ${props => props.color};
    border-radius: 100%;
    box-shadow: -1px 2px 12px rgba(0,0,0,0.2);
    color: #fff;
    display: block;
    font-family: "Karla";
    font-size: 18px;
    font-weight: 700;
    height: 35px;
    line-height: 35px;
    padding-left: 11px;
    text-decoration: none;
    transition: background 0.3s ease;
    width: 35px;
  }
`

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      path: this.props.path,
    }
  }

  checkPath(url) {
    if (this.state.path === url) {
      return "nav-link is-active"
    }
    else {
      return "nav-link"
    }
  }

  render() {
    return (
      <Nav>
        <Container className="container">
          <NavItem>
            <Logo id="logo" color={this.props.color}><Link to="/">Q</Link></Logo>
          </NavItem>
          <NavItemsWrapper>
            <NavItem>
              <Link className={this.checkPath("experience")} to="/experience">Experience</Link>
            </NavItem>
            <NavItem>
              <Link className={this.checkPath("projects")} to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className={this.checkPath("blog")} to="/blog">Blog</Link>
            </NavItem>
          </NavItemsWrapper>
        </Container>
      </Nav>
    )
  }
}

export default NavBar
