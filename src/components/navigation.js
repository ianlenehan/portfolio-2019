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
    color: #dfe6e9;
    font-family: "Poppins";
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all ease-in-out 0.25s;
    :hover {
      color: white;
      border-color: white;
    }
  }
`

const IconItem = styled.li`
  vertical-align: middle;
  color: #dfe6e9;
`

function Navigation(props) {
  return (
    <Nav home={props.home}>
      <Flip top>
        <ul>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
