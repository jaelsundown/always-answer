import React from 'react'
import styled from 'styled-components'
import image1 from '../../../../assets/images/SanAntonio@2x.png'
import { City, State } from '../Typography'

const Container = styled.div`
    @media screen and (min-width: 991px) {
        display: none;
    }
`

const MobileImageTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 5px 20px;
    height: 400px;

    &::before {
        content: "";
        height: 400px;
        background-image: url(${image1});
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.6;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 35px;
`

const IPadView = ({ city, state, children, ...rest}) => {
    return (
        <Container { ...rest }>
            <div>
                <MobileImageTitle>
                    <div>
                        <State>{ state }</State>
                        <City>{ city }</City>
                    </div>
                </MobileImageTitle>
            </div>
            <TextContainer>
                { children }
            </TextContainer>
        </Container>
    )
}

export default IPadView