import React from "react"
import { uniqueId } from "lodash"
import styled from "styled-components"

import { Container } from "../../common"
import LinkRenderer from "../../common/utility/linkRenderer"

const Title = styled.h2`
  font-family: Knockout;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: 0.04em;
  text-align: left;
  color: white;
  margin: 0px;
`

const NavElement = styled.div`
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
  color: white;
  margin: 0px;
`

const SubNavElement = styled.p`
  font-family: Arimo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
  color: white;
  margin: 0px;
  margin-left: 20px;
`

const LinksContainer = styled.div`
  margin-top: 9px;
  margin-bottom: 20px;
`

const StyledLinkRenderer = styled(LinkRenderer)`
  a:hover {
    color: yellow;
  }
`

const renderSubNavElements = subNavElements => subNavElements.map(subNavElement => {
  const { name, url } = subNavElement
  const key = uniqueId(name)
  return (
    <SubNavElement key={key}>
      <StyledLinkRenderer url={url}>
        {name}
      </StyledLinkRenderer>
    </SubNavElement>
  )
})

const renderNavElements = navElements => navElements.map(navElement => {
  const { name, url, subNavElements } = navElement
  const key = uniqueId(name)
  return (
    <NavElement key={key}>
      <StyledLinkRenderer url={url}>
        {name}
      </StyledLinkRenderer>
      {subNavElements &&
        renderSubNavElements(subNavElements)
      }
    </NavElement>
  )
})

const FooterNavCluster = ({ title, navElements, url }) => (
  <Container styles={{ flexDirection: 'column', marginRight: '50px' }}>
    <StyledLinkRenderer url={url}>
      <Title>{title}</Title>
    </StyledLinkRenderer>
    <LinksContainer>
      {
        renderNavElements(navElements)
      }
    </LinksContainer>
  </Container>
)

export default FooterNavCluster
