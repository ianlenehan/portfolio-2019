import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "react-reveal/Slide"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "typeface-montserrat"

const ResumeContainer = styled.div`
  width: 650px;
  height: 950px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  ${props =>
    props.showShadow &&
    `
  box-shadow: 6px 5px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow ease-in-out 1s;
  
  `}
`

const Header = styled.div`
  background-color: #27ae60;
  height: 170px;
  padding: 80px 0 0 50px;

  h1 {
    color: white;
    font-family: "Montserrat";
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: 500;
    margin: 0;
  }

  span {
    color: #263547;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 600;
  }
`

const Body = styled.div`
  display: flex;
  flex-grow: 1;
  font-family: "Montserrat";
`

const LeftSide = styled.div`
  background-color: #263547;
  flex-grow: 1;
  padding: 50px 0 30px 35px;
  color: white;
`

const RightSide = styled.div`
  background-color: white;
  flex-grow: 1;
  padding: 50px 0 50px 35px;
  color: #263547;
`

const H3 = styled.h3`
  font-size: 14px;
  font-weight: 800;
  margin: 0 0 10px 0;
  ${props => props.green && `color: #27ae60;`}
  margin-top: ${props => (props.first ? 0 : `20px`)};
`

const SideList = styled.ul`
  list-style: none;
  margin: 0;
`

const Item = styled.li`
  font-size: 10px;
  font-weight: 500;
  margin: 0px;
  line-height: 14px;

  span {
    display: block;
    font-weight: 200;
  }
`

const ImageWrap = styled(SideList)`
  margin-top: 30px;
`

const devSkills = [
  "React",
  "Redux",
  "React Native",
  "EmberJS",
  "Typescript",
  "GraphQL",
  "Ruby on Rails",
  "Firebase",
]

const sideProjects = [
  {
    name: "NEPTUNE",
    description: "CRM for pool sales company",
    tools: "React, Redux, Firebase",
  },
  {
    name: "CURE8",
    description: "Social curation app",
    tools: "React Native, Redux, GraphQL, Ruby on Rails",
  },
  {
    name: "GOLF CLASSIC",
    description: "Friendly golf competition app",
    tools: "React Native, Ruby on Rails",
  },
]

const interests = [
  "Photography",
  "Video Editing",
  "Travel",
  "Baseball",
  "Golf",
  "CrossFit",
]

const contacts = ["0410 872 627", "ian@ianlenehan.com", "ianlenehan.com"]

const Resume = props => {
  const [showShadow, setShowShadow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowShadow(true)
    }, 1300)
  }, [])

  const imageData = useStaticQuery(graphql`
    query {
      linkedIn: file(relativePath: { eq: "LinkedIn_logo_initials.png" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github_logo.png" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout hideHeader>
      <SEO title="Resume" />
      <ResumeContainer showShadow={showShadow}>
        <Slide top>
          <Header>
            <h1>IAN LENEHAN</h1>
            <span>WEB DEVELOPER</span>
          </Header>
        </Slide>
        <Body>
          <Slide left>
            <div className="left-side-inner">
              <LeftSide>
                <H3 green first>
                  DEV SKILLS
                </H3>
                <SideList>
                  {devSkills.map(skill => {
                    return <Item key={skill}>{skill}</Item>
                  })}
                </SideList>

                <H3 green>SIDE PROJECTS</H3>
                <SideList>
                  {sideProjects.map(project => {
                    return (
                      <Item key={project.name}>
                        {project.name}
                        <span>{project.description}</span>
                        <span style={{ marginBottom: 10 }}>
                          {project.tools}
                        </span>
                      </Item>
                    )
                  })}
                </SideList>

                <H3 green>INTERESTS</H3>
                <SideList>
                  {interests.map(interest => {
                    return <Item key={interest}>{interest}</Item>
                  })}
                </SideList>

                <H3 green>CONTACT</H3>
                <SideList>
                  {contacts.map(contact => {
                    return <Item key={contact}>{contact}</Item>
                  })}
                </SideList>
                <ImageWrap>
                  <Img fixed={imageData.linkedIn.childImageSharp.fixed} />
                  <Item>au.linkedin.com/in/ilenehan</Item>
                </ImageWrap>

                <ImageWrap>
                  <Img fixed={imageData.github.childImageSharp.fixed} />
                  <Item>github.com/ianlenehan</Item>
                </ImageWrap>
              </LeftSide>
            </div>
          </Slide>
          <Slide right>
            <div className="right-side-inner">
              <RightSide>
                <H3 first>PROFILE</H3>
              </RightSide>
            </div>
          </Slide>
        </Body>
      </ResumeContainer>
    </Layout>
  )
}

export default Resume

// const GithubImage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       file(relativePath: { eq: "github.png" }) {
//         childImageSharp {
//           fixed(width: 50, height: 50) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `)

//   return <Img fixed={data.file.childImageSharp.fixed} />
// }
