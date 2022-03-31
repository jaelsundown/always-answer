import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-flow: column wrap;
`
const Header = styled.h1`
    color: #D9584B;
    font-family: Nanum Myeongjo;
    font-weight: 700;
    font-size: 3em;
    letter-spacing: 0em;
`
const ParagraphContainer = styled.div`
    display: flex;
    flex-flow: row;
    @media screen and (max-width: 768px) {
        flex-flow: column;
    }
`
const ContentColumn = styled.div`
    flex: 1;
    padding-right: 20px;
`

const BlogSection = () => {
    return (
        <Section>
            <Header>Emergency Dispatch</Header>
            <ParagraphContainer>
                <ContentColumn>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non potenti neque volutpat. 
                        Ac purus ipsum, ac nascetur. Non quis volutpat porttitor mauris purus vestibulum, vehicula sed. 
                        Egestas in nibh aenean sit pellentesque vitae et elementum. Donec dignissim hendrerit quis nisl ipsum arcu euismod magna. 
                        Egestas tellus bibendum bibendum enim. Vel, sit massa diam viverra tempor.
                    </p>
                    <p>
                        Diam at tellus arcu sapien imperdiet auctor donec. 
                        Tincidunt proin fermentum proin nisi in quam est mollis velit. Risus, interdum facilisis senectus fames commodo vitae at. 
                        Turpis bibendum sed erat ornare mattis. Ut consectetur quam adipiscing consectetur cursus elit placerat. 
                        Nulla venenatis, integer purus id. Pharetra sit non ac elementum.
                    </p>
                </ContentColumn>
                <ContentColumn>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Enim, vitae, interdum porta nisi, est facilisis proin. 
                        Risus urna fringilla turpis facilisis fringilla accumsan tincidunt sit hendrerit.
                        A hendrerit massa blandit vivamus. Sapien venenatis lectus blandit vel hac risus. 
                        Ipsum natoque nunc euismod felis gravida adipiscing ullamcorper gravida ultrices. 
                    </p>
                    <p>
                        Semper vel at sed massa diam pellentesque praesent. Vitae nulla quis rutrum purus massa. 
                        Urna sed fames semper odio et amet id. Sed non magna non nulla. Nunc a tincidunt metus elit magna. 
                        Tempus cras congue lacus sed. A quis velit in in nunc et. Quam commodo pellentesque quis facilisis orci. 
                        Ornare proin odio malesuada tempor tellus. Donec nunc cursus etiam mus fringilla. 
                        Molestie arcu facilisi quisque nunc, enim amet. Urna, pulvinar sagittis, ipsum nibh tempus.
                        Morbi neque, faucibus sed eget. 
                    </p>
                    <p>
                        Mauris a commodo non turpis aenean semper tristique sit venenatis. Lacinia et dictum adipiscing id porttitor odio. 
                        Mi diam tempor amet pellentesque purus volutpat elit, in. Sagittis eu vestibulum eros tincidunt. 
                        Tempor, ultricies libero pretium accumsan nibh amet. 
                        Urna dictum phasellus facilisis odio ultrices at tristique eu tellus. 
                        Sed sagittis mi rhoncus augue cursus. Nibh amet, sagittis eget velit dui morbi morbi hendrerit. 
                        Facilisis purus tristique aliquam nulla elit, tincidunt dignissim. 
                        Sit quisque bibendum eget platea. Arcu, congue massa, sed integer.
                    </p>
                </ContentColumn>
            </ParagraphContainer>
        </Section>
    )
}

export default BlogSection