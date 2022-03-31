import React from "react"
import styled from "styled-components"

import Body from "../../components/body"
import Header from "../../components/header"
import Footer from "../../components/footer"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: auto;
`

const ContactPage = () => {
  return (
    <PageContainer>
      <Header />
      <Body>
      </Body>
      <Footer />
    </PageContainer>
  )
}

export default ContactPage
