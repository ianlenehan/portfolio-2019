import React from "react"
import styled from "styled-components"
import { HomePageContainer } from "../components/sharedStyles"
import BackgroundImage from "gatsby-background-image"
import Bounce from "react-reveal/Bounce"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import "typeface-poppins"

const SiteName = styled.h1`
  font-family: "Acme";
  font-size: 100px;
  color: white;
  margin-bottom: 0;
`

const SubHeader = styled.h3`
  color: white;
  font-family: "Poppins";
  font-weight: 300;
`

const imageChoices = ["One", "Two", "Three"]

const IndexPage = props => {
  const getImage = () => {
    const index = Math.floor(Math.random() * 3 + 1) - 1
    const imagePrefix = imageChoices[index]
    return `image${imagePrefix}`
  }

  const image = getImage()

  return (
    <BackgroundImage
      fluid={props.data[image].childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <HomePageContainer>
        <SEO title="Home" />
        <Navigation home />
        <Bounce left>
          <SiteName>IAN LENEHAN</SiteName>
        </Bounce>
        <Bounce right>
          <SubHeader>{"Web Developer & Photographer"}</SubHeader>
        </Bounce>
      </HomePageContainer>
    </BackgroundImage>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "dublin_bridge.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "forest.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "giants.jpg" }) {
      ...fluidImage
    }
  }
`
