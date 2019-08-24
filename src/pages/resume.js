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
  margin-top: 10px;
  overflow: hidden;
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
  padding: 50px 25px 30px 35px;
  color: white;
`

const RightSide = styled.div`
  background-color: white;
  flex-grow: 1;
  padding: 50px 35px;
  color: #263547;

  p.bodyText {
    font-size: 11px;
    line-height: initial;
  }
`

const H3 = styled.h3`
  font-size: 14px;
  font-weight: 800;
  margin: 0 0 10px 0;
  letter-spacing: 1px;
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

const JobTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin: 20px 0 0 0;
  line-height: 14px;
`

const ImageWrap = styled(SideList)`
  margin-top: 15px;
`

const HR = styled.hr`
  height: 3px;
  background-color: #27ae60;
  width: 100%;
  margin-top: 45px;
`

const Job = styled.p`
  color: #9199a1;
  font-size: 11px;
  line-height: initial;
  font-weight: 500;
  margin: 0 0 5px 0;
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
    <Layout smallHeader dark>
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
                <p className="bodyText">
                  A former recruiter and operations manager in the outdoor
                  advertising industry, I have found my calling with my third
                  career as a web developer. A keen problem solver, I love the
                  highs that this job brings when fixing a bug or cracking a
                  complicated feature. I believe I can get on with almost
                  anybody and my unique career path has given me a variety of
                  skills and experiences that I can bring to my job as a dev.
                </p>

                <HR />

                <H3>EXPERIENCE</H3>
                <JobTitle>DEVELOPER</JobTitle>
                <Job>Yarno | Feb 2019 - Aug 2019</Job>
                <Item>
                  React, GraphQL, Ruby on Rails, some exposure to Docker and AWS
                </Item>

                <JobTitle>FRONT END DEVELOPER</JobTitle>
                <Job>Blake eLearning | Aug 2016 - Feb 2019</Job>
                <Item>EmberJS, Ruby on Rails</Item>

                <JobTitle>OPERATIONS & CONSULTING ROLES</JobTitle>
                <Job>APN Outdoor / APN News & Media | 2009 - 2015</Job>

                <JobTitle>RECRUITMENT CONSULTANT</JobTitle>
                <Job>Hudson, Finite IT, Chandler Macleod | 2005 - 2009</Job>

                <HR />

                <H3>EDUCATION</H3>
                <JobTitle>WEB DEVELOPMENT IMMERSIVE</JobTitle>
                <Job>General Assembly | 2016</Job>

                <JobTitle>BACHELOR OF ARTS (HISTORY & POLITICS)</JobTitle>
                <Job>University College Dublin | 1999 - 2002</Job>
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
