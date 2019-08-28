import React, { useEffect, useState } from "react"
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
  cursor: pointer;
`

const SubHeader = styled.h3`
  color: white;
  font-family: "Poppins";
  font-weight: 300;
`

const IndexPage = props => {
  const [image, setImage] = useState("image1")
  const getImage = () => {
    const index = Math.floor(Math.random() * 10 + 1)
    console.log("getting image", index)

    setImage(`image${index}`)
  }

  useEffect(() => getImage(), [])

  return (
    <BackgroundImage
      fluid={props.data[image].childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <HomePageContainer>
        <SEO title="Home" />
        <Navigation home />
        <Bounce left>
          <SiteName onClick={getImage}>IAN LENEHAN</SiteName>
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
    image1: file(relativePath: { eq: "homepage/dublin_bridge.jpg" }) {
      ...fluidImage
    }
    image2: file(relativePath: { eq: "homepage/forest.jpg" }) {
      ...fluidImage
    }
    image3: file(relativePath: { eq: "homepage/giants.jpg" }) {
      ...fluidImage
    }
    image4: file(relativePath: { eq: "homepage/house_moon.jpg" }) {
      ...fluidImage
    }
    image5: file(relativePath: { eq: "homepage/lahinch_sunset.jpg" }) {
      ...fluidImage
    }
    image6: file(relativePath: { eq: "homepage/light.jpg" }) {
      ...fluidImage
    }
    image7: file(relativePath: { eq: "homepage/quilt.jpg" }) {
      ...fluidImage
    }
    image8: file(relativePath: { eq: "homepage/red_morning.jpg" }) {
      ...fluidImage
    }
    image9: file(relativePath: { eq: "homepage/vivid.jpg" }) {
      ...fluidImage
    }
    image10: file(relativePath: { eq: "homepage/yangshuo.jpg" }) {
      ...fluidImage
    }
  }
`
