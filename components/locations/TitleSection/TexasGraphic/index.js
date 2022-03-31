import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 197px;
`

const Top = styled.div`
    position: relative;
    background: #5EDFF0;
    border-radius: 100%;
    height: 200px;
    width: 200px;
`

const Mid = styled.div`
    background: #D9584B;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    height: 100px;
    width: 200px;
`

const Bot = styled.div`
    background: #BAD6FF;
    height: 244px;
    width: 197px;
    border-radius: 500px;
`

const ImageContainer = styled.div`
    position: absolute;
    left: 100px;
`

const TexasGraphic = (props) => {
    return (
        <Container {...props}>
            <Top>
                <ImageContainer>
                    <StaticImage src="../../../assets/images/TexasGraphic.png" alt="Shape of Texas" height={175} width={137}  />
                </ImageContainer>
            </Top>
            <Mid />
            <Bot />
        </Container>
    )
}

export default TexasGraphic