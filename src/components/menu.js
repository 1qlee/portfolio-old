import {Link} from "gatsby"
import styled from "styled-components"
import styles from "./styles"

const Menu = styled.ul`
  overflow-y: auto;
  padding: 12px;
  margin: 20px 0;
`

export const MenuGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const MenuHeader = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  a {
    color: ${styles.grey};
    text-decoration: none;
    &:hover {
      color: #000};
    }
  }
`

export default () => (
  <Menu>
    <MenuGroup>
      <MenuHeader>
        <Link to="/about">About Me</Link>
      </MenuHeader>
    </MenuGroup>
    <MenuGroup>
      <MenuHeader>
        <Link to="/experience">Experience</Link>
      </MenuHeader>
    </MenuGroup>
    <MenuGroup>
      <MenuHeader>
        <Link to="/projects">Projects</Link>
      </MenuHeader>
    </MenuGroup>
    <MenuGroup>
      <MenuHeader>
        <Link to="/blog">Blog</Link>
      </MenuHeader>
    </MenuGroup>
  </Menu>
)
