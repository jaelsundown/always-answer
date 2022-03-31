import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from '../header'
import Body from "../body"
import Footer from "../footer"

const PageContainer = styled.div`
  display: 'flex',
  flex-direction: 'column',
  z-index: 'auto',
`

  const Layout = ({ children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <PageContainer>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </PageContainer>
  )
}

export default Layout
