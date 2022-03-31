import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  align-items: center;
  background-color: #434AB0;
  border-radius: 32px;
  display: flex;
  height: 60px;
  justify-content: space-around;
  width: 178px;
`

const ButtonTitle = styled.p`
  font-family: Knockout;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 0;
`

const Button = ({ children, onClick, buttonStyles, textStyles }) => (
    <ButtonContainer onClick={onClick} style={buttonStyles} type="button">
      <ButtonTitle style={textStyles}>{children}</ButtonTitle>
    </ButtonContainer>
)

export default Button
