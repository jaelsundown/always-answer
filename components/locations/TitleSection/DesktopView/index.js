import React from 'react'
import styled from 'styled-components'
import image1 from '../../../../assets/images/SanAntonio@2x.png'
import TexasGraphic from '../TexasGraphic'
import { City, State } from '../Typography'

const Container = styled.div`
    display: none;
    @media screen and (min-width: 991px) {
        display: block;
    }
`

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Image = styled.div`
    background-image: url(${image1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    width: 675px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 35px;
    margin: 35px 50px;
    width: 675px;
`

const DesktopView = ({ city, state, text, children, ...rest}) => {
    return (
        <Container { ...rest }>
            <FlexRow>
                <Image />
                <TexasGraphic />
                <TextContainer>
                    <State>{ state }</State>
                    <City>{ city }</City>
                    { children }
                </TextContainer>
            </FlexRow>
    </Container>
    )
}


export default DesktopView