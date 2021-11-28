import React from 'react'
import { ParallaxContainer } from '../components/parallax/ParallaxContainer'
import { SectionHeadline } from '../components/sectionheadline/SectionHeadline'
import typen from '../assets/img/04.JPG'

export const Contact = () => {
    return (
        <ParallaxContainer style={{display: "flex", justifyContent: "center"}} image={typen}
        header={<SectionHeadline title="Contact" />}>
            <div style={{height: "100vh"}}>

            </div>
        </ParallaxContainer>
    )
}
