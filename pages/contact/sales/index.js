import React from "react"
import styled from "styled-components"

import Body from "../../../components/body"
import Footer from "../../../components/footer"
import Header from "../../../components/header"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: auto;
`

const SalesPage = () => {
  return (
    <PageContainer>
      <Header />
      <Body>

      </Body>
      <Footer />
    </PageContainer>
  )
}

export default SalesPage
