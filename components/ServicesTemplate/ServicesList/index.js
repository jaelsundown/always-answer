import React from "react"
import styled from "styled-components"

const Container = styled.div`
    font-family: Arimo;
`
const Header = styled.h6`
    font-size: 2em;
    color: #D9584B;
    letter-spacing: 1px;
`
const ListItem = styled.p`
    margin: 5px 0;
`
const SubHeader = styled(ListItem)`
    font-family: Knockout;
    font-size: 24px;
    color: #434AB0;
    letter-spacing: 1px;
    font-weight: 600;
`
const List = styled.div`
    font-size: 16px;
    padding-left: 25px;
    margin-bottom: 35px;
    min-width: 213px;
`
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (min-width: 1023px) {
    flex-direction: column;
  }
`

const ServicesList = () => {
    return (
      <Container>
        <Header>Our Services</Header>
        <ListContainer>
          <List>
            <SubHeader>Live Answering</SubHeader>
            <ListItem>Emergency Dispatch</ListItem>
            <ListItem>Virtual Receptionist</ListItem>
            <ListItem>Appointment Scheduling</ListItem>
            <ListItem>Employee Screening Services</ListItem>
          </List>
          <List>
            <SubHeader>Call Center</SubHeader>
            <ListItem>Order Entry</ListItem>
            <ListItem>Customer Support</ListItem>
            <ListItem>Surveys</ListItem>
            <ListItem>Event Registration</ListItem>
          </List>
        </ListContainer>
      </Container>
    )
  }

export default ServicesList
