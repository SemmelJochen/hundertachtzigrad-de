import React from 'react'
import { ParallaxContainer } from '../components/parallax/ParallaxContainer'
import { SectionHeadline } from '../components/sectionheadline/SectionHeadline'
import typen from '../ressources/img/foto.jpg'

export const AboutUs = () => {
    return (
        <ParallaxContainer style={{display: "flex", justifyContent: "center"}} image={typen}
        header={<SectionHeadline title="About Us" />}>
            <div style={{height: "100vh"}}>

            </div>
        </ParallaxContainer>
    )
}
