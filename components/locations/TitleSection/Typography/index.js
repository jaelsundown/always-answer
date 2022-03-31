import React from 'react'
import styled from 'styled-components'

const StyledStateText = styled.h6`
    color: #434AB0;
    font-family: Knockout;
    font-size: 1.5em;
    text-transform: uppercase;
    margin: 0 5px;
`

const StyledCityText = styled.h1`
    color: #D9584B;
    font-size: 5.5em;
    font-family: Nanum Myeongjo;
    font-weight: 600;
    margin-top: 0px;
    margin-bottom: 0px;
`

const State = (props) => <StyledStateText {...props} />

const City = (props) => <StyledCityText {...props} />

export { State, City }