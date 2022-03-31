import React from 'react'
import styled from 'styled-components'
import DesktopView from './DesktopView'
import IPadView from './IPadView'
import Description from './Description'

const Container = styled.div`
    margin-top: 50px;
    margin-left: 0;
    margin-right: 45px;
    margin-bottom: 100px;
`

const TitleSection = (props) => {
    return (
        <Container {...props}>
            <IPadView
                city="San Antonio"
                state="Texas"
            >
                <Description>
                    Whether you are an independent contractor who wants to offer a more professional experience. 
                    Or a business that needs assistance with after-hours calls. 
                    Personalized Communications can give you the strategic advantage with our live answering service for small business or call answering service.
                </Description>   
            </IPadView>
            <DesktopView
                city="San Antonio"
                state="Texas"
            >
                <Description>
                    Whether you are an independent contractor who wants to offer a more professional experience. 
                    Or a business that needs assistance with after-hours calls. 
                    Personalized Communications can give you the strategic advantage with our live answering service for small business or call answering service.
                </Description>
            </DesktopView>
        </Container>
    )
}

export default TitleSection