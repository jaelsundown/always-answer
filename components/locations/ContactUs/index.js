import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h5`
  color: #d9584b;
  font-family: Nanum Myeongjo;
  font-size: 4em;
  margin-top: 0;
  margin-bottom: 10px;
`

const Text = styled.p`
  color: #434ab0;
  font-family: Arimo;
  font-size: 1.2em;
  margin-top: 0;
  margin-bottom: 10px;
  letter-spacing: 1px;
`

const PhoneNumber = styled.p`
  color: #d9584b;
  font-family: Knockout;
  font-size: 3em;
  margin-top: 0;
  font-weight: 500;
`

const WidthConstraint = styled.div`
  width: 550px;
  text-align: center;
`

const ContactUs = ({ header, children, phone, ...rest }) => {
  return (
    <Container {...rest}>
      <WidthConstraint>
        <Header>{header}</Header>
        <Text>{children}</Text>
        <PhoneNumber>{phone}</PhoneNumber>
      </WidthConstraint>
    </Container>
  )
}

export default ContactUs
