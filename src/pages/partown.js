import React from "react"
import styled from "styled-components"
import PrivacyPolicy from "../assets/ParTown_PrivacyPolicy.pdf"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContainer } from "../components/sharedStyles"

const H1 = styled.h1`
  font-family: "Acme";
`

function Partown() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageContainer>
        <H1>Par Town</H1>
        <a href={PrivacyPolicy}>Privacy Policy</a>
      </PageContainer>
    </Layout>
  )
}

export default Partown
