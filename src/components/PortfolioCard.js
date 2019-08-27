import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Card = styled.div`
  background-color: white;
  width: 85%;
  border-radius: 10px 10px 0 0;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
`

const Title = styled.h2`
  font-family: "Acme";
  margin: 25px;
  color: #263547;
`

const Description = styled.p`
  margin: 25px;
  font-family: "Poppins";
  font-size: 16px;
  line-height: initial;
  color: #263547;
`

const Weblink = styled.a`
  ${props => !props.href && `display: none;`}
  font-family: "Poppins";
  font-size: 14px;
  margin: 25px;
  font-weight: 600;
  text-decoration: none;
  color: #27ae60;
  :hover {
    color: #263547;
  }
`

const TechArea = styled.div`
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
`

const Code = styled.code`
  background: #f4f4f4;
  border: 1px solid #ddd;
  color: #666;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  overflow: auto;
  padding: 0 5px;
  margin: 5px;
  word-wrap: break-word;
`

function PortfolioCard(props) {
  const imageData = useStaticQuery(graphql`
    query {
      neptune: file(relativePath: { eq: "neptune.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cure8: file(relativePath: { eq: "cure8.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yarno: file(relativePath: { eq: "yarno.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      golf: file(relativePath: { eq: "golf.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Card>
      <Fade duration={2000}>
        <Title>{props.title.toUpperCase()}</Title>
        <Description>{props.description}</Description>
        <Weblink href={props.link} target="_blank">
          Visit Weblink
        </Weblink>
        <TechArea>
          {props.techList ? (
            props.techList.map(item => <Code key={item}>{item}</Code>)
          ) : (
            <span />
          )}
        </TechArea>
        {props.image ? (
          <Img
            fluid={imageData[props.image].childImageSharp.fluid}
            style={{ marginTop: 25 }}
          />
        ) : (
          <span />
        )}
      </Fade>
    </Card>
  )
}

export default PortfolioCard
