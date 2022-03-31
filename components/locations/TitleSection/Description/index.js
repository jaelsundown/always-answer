import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
    color: #03276D;
    font-family: Arimo; 
    font-size: 1.4em;
    @media screen and (min-width: 767px) {
        font-size: 2em;
    }
`

const Description = (props) => {
    return <Text {...props} />
}

export default Description