import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "./styles"

const Nav = styled.nav`
  background: #fff;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
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
    font-family: "Rubik";
    font-size: 14px;
    line-height: 1.5;
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
    font-family: "Rubik";
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
      path: window.location.pathname,
      color: this.props.color,
    }
  }

  checkPath(link) {
    if (this.state.path === link) {
      return "nav-link is-active";
    }
    else {
      return "nav-link";
    }
  }

  render() {
    return (
      <Nav>
        <NavItem>
          <Logo id="logo" color={this.props.color}><Link to="/">Q</Link></Logo>
        </NavItem>
        <NavItemsWrapper>
          <NavItem>
            <Link className={this.checkPath("/experience")} to="/experience">Experience</Link>
          </NavItem>
          <NavItem>
            <Link className={this.checkPath("/projects")} to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link className={this.checkPath("/blog")} to="/blog">Blog</Link>
          </NavItem>
        </NavItemsWrapper>
      </Nav>
    )
  }
}

export default NavBar
