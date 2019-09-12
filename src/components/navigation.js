import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { Link } from "gatsby"
import Flip from "react-reveal/Flip"
import { FaLinkedin, FaBars } from "react-icons/fa"
import "typeface-poppins"

Modal.setAppElement("body")

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const Nav = styled.div`
  ${props =>
    props.home &&
    `
    position: absolute;
    top: 30px;
  `};
`

const NavList = styled.ul`
  list-style: none;
  margin: 0;
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
  @media only screen and (max-device-width: 700px) {
    display: none;
  }
`

const IconItem = styled.li`
  vertical-align: middle;
  color: #dfe6e9;
`

const Hamburger = styled.div`
  vertical-align: middle;
  display: none;
  color: ${props => (props.dark ? `#263547` : `white`)};
  font-size: 24px;
  cursor: pointer;
  @media only screen and (max-device-width: 700px) {
    display: block;
  }
`

const Title = styled.h2`
  font-family: "Acme";
  margin: 25px;
  color: #263547;
`

const Text = styled.p`
  margin: 25px;
  font-family: "Poppins";
  font-size: 16px;
  line-height: initial;
  color: #263547;
`

const MobileNav = styled.div`
  position: fixed;
  background-color: white;
  width: 85vw;
  height: 100vh;
  left: -85vw;
  top: 0;
  z-index: 1;
  transition: left ease-in-out 0.5s;

  ${props =>
    props.show &&
    `
    box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.3);
    left: 0;
    transition: left ease-in-out 0.5s;
  `}

  ul {
    list-style: none;
    margin: 30px;

    li {
      margin: 30px 0;
      a {
        font-family: "Poppins";
        font-size: 35px;
        line-height: initial;
        color: #27ae60;
        text-decoration: none;
      }
    }
  }
`

function Navigation(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const toggleMobileNav = () => {
    setNavOpen(!navOpen)
  }

  const toggleContactForMobile = () => {
    toggleMobileNav()
    setModalOpen(!modalOpen)
  }

  const activeClassName = props.dark ? "active-nav-dark" : "active-nav"
  return (
    <Nav home={props.home} dark={props.dark}>
      <Flip top>
        <NavList>
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
            <a href="#" onClick={() => setModalOpen(true)}>
              Contact
            </a>
          </li>
          <IconItem>
            <a href="https://au.linkedin.com/in/ilenehan">
              <FaLinkedin />
            </a>
          </IconItem>
        </NavList>
      </Flip>
      <Hamburger dark={props.dark} onClick={toggleMobileNav}>
        <FaBars />
      </Hamburger>
      <MobileNav show={navOpen}>
        <ul>
          <li>
            <Link
              to="/resume"
              activeClassName={activeClassName}
              onClick={toggleMobileNav}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/code"
              activeClassName={activeClassName}
              onClick={toggleMobileNav}
            >
              Code
            </Link>
          </li>
          <li>
            <Link
              to="/photography"
              activeClassName={activeClassName}
              onClick={toggleMobileNav}
            >
              Photography
            </Link>
          </li>
          <li>
            <a href="#" onClick={toggleContactForMobile}>
              Contact
            </a>
          </li>
          <IconItem>
            <a href="https://au.linkedin.com/in/ilenehan">
              <FaLinkedin />
            </a>
          </IconItem>
        </ul>
      </MobileNav>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
      >
        <Title>Get In Touch</Title>
        <Text>ian@ianlenehan.com</Text>
      </Modal>
    </Nav>
  )
}

export default Navigation
