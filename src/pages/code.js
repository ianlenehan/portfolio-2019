import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import PortfolioCard from "../components/PortfolioCard"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const projects = [
  {
    title: "Neptune",
    description:
      "Neptune is a custom CRM commissioned for use and redistribution by Leisure Pools. It contains complete customer management anD manages the entire sales process, from generating a quote to creating the contract. Neptune includes SMS and email capabilites, as well as document storage and more.",
    tech: ["React", "Recoil", "Firebase", "Google Cloud"],
    link: "https://neptunecrm.com",
    image: "neptune",
  },
  {
    title: "Cure8",
    description:
      "Cure8 is a React Native app I developed a couple of years ago. It's a social curation app that allows you to save weblinks for yourself and/or your friends. See a TED talk they might enjoy? don't SMS it to them, Cure8 it for them. Next time they open the app, they'll see all their saved links.",
    tech: ["React Native", "Redux", "Ruby on Rails"],
    link: "https://apps.apple.com/au/app/cure8/id1277695453",
    image: "cure8",
  },
  {
    title: "Par Town",
    description:
      "Par Town is a friendly golf competition app I am working on at the moment. I have already built a simple version just for use with my friends (that is the image you see below); Par Town is the app I want to put in the app store for everyone to use.",
    tech: ["React Native", "Ruby on Rails"],
    link: null,
    image: "golf",
  },
]

const blurb =
  "A former recruiter and operations manager in the outdoor advertising industry, I have found my calling with my third career as a web developer. A keen problem solver, I love the highs that this job brings when fixing a bug or cracking a complicated feature, and always have a side project going in my spare time. I believe I can get on with almost anybody and my unique career path has given me a variety of skills and experiences that I can bring to my job as a dev."

const techSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "TypeScript",
  "React",
  "React Native",
  "Redux",
  "Apollo GraphQL",
  "EmberJS",
  "Ruby on Rails",
  "Firebase",
  "Styled Components",
  "Cypress",
  "Puppeteer",
  "Webpack",
]

function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container>
        <PortfolioCard
          title="About Me"
          description={blurb}
          techList={techSkills}
        />
        {projects.map(project => {
          return (
            <PortfolioCard
              key={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              techList={project.tech}
              image={project.image}
            />
          )
        })}
      </Container>
    </Layout>
  )
}

export default Portfolio
