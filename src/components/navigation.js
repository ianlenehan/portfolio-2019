import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { Link } from "gatsby"
import Flip from "react-reveal/Flip"
import { FaLinkedin } from "react-icons/fa"
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

function Navigation(props) {
  const [modalOpen, setModalOpen] = useState(false)
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
            <a href="#" onClick={() => setModalOpen(true)}>
              Contact
            </a>
          </li>
          <IconItem>
            <a href="https://au.linkedin.com/in/ilenehan">
              <FaLinkedin />
            </a>
          </IconItem>
        </ul>
      </Flip>
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
