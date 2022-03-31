import React from 'react'
import styled from 'styled-components'
import LinkRenderer from '../../common/utility/linkRenderer'
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 1049px) {
        flex-direction: column;
        align-items: center;
    }
`

const Content = styled.div`
    width: 500px;
    min-width: 450px;
`

const Date = styled.p`
    margin: 0;
    color: #434AB0;
    font-family: Knockout;
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase; 
`

const Title = styled.h4`
    margin: 0;
    color: #D9584B;
    font-family: Nanum Myeongjo;
    font-size: 28px;
`

const Description = styled.div`
    & > p {
        margin: 0;
        color: #03276D;
        font-family: Arimo; 
    }
`

const Link = styled.span`
    display: inline-block;
    margin-top: 15px;
    color: #D9584B;
    font-family: Knockout;
    font-size: 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: underline;
`

const Image = styled.div`
    min-width: 450px;
    width: 500px;
    order: ${props => props.flip ? 0 : 2};
    margin: ${props => props.flip ? `0 50px 0 0` : `0 0 0 50px`};
    @media screen and (max-width: 1049px) {
        order: -1;
        margin: 0;
    }
`

const Post = props => {
    const image = {
        data: props.image?.node?.localFile?.childImageSharp?.gatsbyImageData,
        alt: props.image?.node?.alt || ``,
      }

    return (
        <Container {...props}>
            <Image flip={props.flip}>
                {image?.data && (
                <GatsbyImage
                image={image.data}
                alt={image.alt}
                aspectRatio={1}
                width={400}
                />
                )}
          </Image>
            <Content>
                <Date>{props.date}</Date>
                <Title>{props.title}</Title>
                <Description>{parse(props.description)}</Description>
                <LinkRenderer url={props.uri}><Link>Read More</Link></LinkRenderer>
            </Content>
        </Container>
    )
}

export default Post