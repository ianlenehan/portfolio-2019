import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  display: flex;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`

const Image = styled(Img)`
  margin: 5px;
  width: 75%;
`

function Photos({ category }) {
  const imageData = useStaticQuery(
    graphql`
      query {
        cities: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "photography/Cities" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxHeight: 950) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        landscape: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "photography/Landscape" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxHeight: 950) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        crossfit: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "photography/CrossFit" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxHeight: 950) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        weddings: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "photography/Weddings" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxHeight: 950) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        wildlife: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "photography/Wildlife" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxHeight: 950) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const { edges } = imageData[category]

  return (
    <Container>
      <ImagesContainer category={category}>
        {edges.map(e => (
          <Image
            fluid={e.node.childImageSharp.fluid}
            key={e.node.id}
            alt={e.node.name.replace(/-/g, " ").substring(2)}
            imgStyle={{ objectFit: "contain" }}
            style={{ maxHeight: "100%" }}
          />
        ))}
      </ImagesContainer>
    </Container>
  )
}

export default Photos
