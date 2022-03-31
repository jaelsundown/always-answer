import React from "react"
import styled from "styled-components"

import Body from "../../components/body"
import Footer from "../../components/footer"
import Header from "../../components/header"
import LocationSummarySection from "../../components/location_summary_section"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: auto;
`

const OurCompanyPage = () => {
  return (
    <PageContainer>
      <Header />
      <Body>

        <LocationSummarySection />
      </Body>
      <Footer />
    </PageContainer>
  )
}

export default OurCompanyPage
