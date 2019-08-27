import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 10px 5px;
    border: none;
    color: #263547;
    background-color: #ecf0f1;
    width: 50px;

    :hover {
      color: #27ae60;
      transition: all ease-in-out 0.25s;
      cursor: pointer;
    }

    :focus {
      outline: none;
    }
  }
`

function SlideShow({ category }) {
  const [index, setIndex] = useState(0)
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
  //Minus 1 for array offset from 0
  const imageSet = imageData[category]
  const length = imageSet.edges.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  const { node } = imageSet.edges[index]
  return (
    <div style={{ maxHeight: "100%", height: "100%" }}>
      <Buttons>
        <button onClick={() => handlePrevious()}>{"<"}</button>
        <button onClick={() => handleNext()}>{">"}</button>
      </Buttons>
      <Img
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, " ").substring(2)}
        imgStyle={{ objectFit: "contain" }}
        style={{ maxHeight: "100%" }}
      />
    </div>
  )
}

export default SlideShow
