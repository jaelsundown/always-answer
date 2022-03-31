import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding-right: 4em;
  height: 25px;
  text-align: right;
`

const BreadCrumbLink = styled.h4`
  display: inline-block;
  margin: 0;
  font-family: Knockout;
  font-weight: 700;
`
const CurrentLocation = styled(BreadCrumbLink)`
  color: #434ab0;
`

const PreviousLocation = styled(BreadCrumbLink)`
  color: #d9584b;
`

const Link = styled.span`
  color: inherit;
  margin-right: 10px;
`

const BreadCrumb = ({ links }) => {
  return (
    <Container>
      {links.map((link, i) => {
        if (i === links.length - 1) {
          return (
            <CurrentLocation>
              <Link>{link}</Link>
            </CurrentLocation>
          )
        } else {
          return (
            <PreviousLocation>
              <Link>{link}</Link>
              <Link>&gt;</Link>
            </PreviousLocation>
          )
        }
      })}
    </Container>
  )
}

export default BreadCrumb
