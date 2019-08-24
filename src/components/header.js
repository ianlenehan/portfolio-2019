import { Link } from "gatsby"
import styled from "styled-components"
import Flip from "react-reveal/Flip"
import Navigation from "./navigation"
import PropTypes from "prop-types"
import React from "react"

const HeaderContainer = styled.div`
  background: ${props => (props.smallHeader ? `none` : `#27ae60`)};
  margin-bottom: ${props => (props.smallHeader ? `5px` : `1.45rem`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => (props.smallHeader ? `5px` : `1.45rem 1.0875rem`)};

  h1 {
    font-family: "Acme";
  }
`

const Header = ({ siteTitle, smallHeader, dark }) => (
  <HeaderContainer smallHeader={smallHeader}>
    <Flip top>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: dark ? ` #263547` : `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle.toUpperCase()}
          </Link>
        </h1>
      </div>
    </Flip>
    <Navigation dark={dark} />
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
