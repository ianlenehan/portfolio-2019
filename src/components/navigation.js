import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Flip from "react-reveal/Flip"
import { FaLinkedin } from "react-icons/fa"
import "typeface-poppins"

const Nav = styled.div`
  ${props =>
    props.home &&
    `
    position: absolute;
    top: 30px;
  `};
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    display: inline;
    margin: 0 8px;
  }
  a {
    color: ${props => (props.dark ? `#263547` : `#dfe6e9`)};
    transition: color 1s;
    font-family: "Poppins";
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all ease-in-out 0.25s;
    :hover {
      color: ${props => (props.dark ? `#263547` : `white`)};
      border-color: ${props => (props.dark ? `#263547` : `white`)};
    }
  }
`

const IconItem = styled.li`
  vertical-align: middle;
  color: #dfe6e9;
`

function Navigation(props) {
  const activeClassName = props.dark ? "active-nav-dark" : "active-nav"
  return (
    <Nav home={props.home} dark={props.dark}>
      <Flip top>
        <ul>
          <li>
            <Link to="/resume" activeClassName={activeClassName}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/code" activeClassName={activeClassName}>
              Code
            </Link>
          </li>
          <li>
            <Link to="/photography" activeClassName={activeClassName}>
              Photography
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={activeClassName}>
              Contact
            </Link>
          </li>
          <IconItem>
            <a href="https://au.linkedin.com/in/ilenehan">
              <FaLinkedin />
            </a>
          </IconItem>
        </ul>
      </Flip>
    </Nav>
  )
}

export default Navigation
