import React from 'react'
import backgroundImage from '../../assets/180Grad_Website_Content/Bilder/DSCF3995.JPG'

export const ImageContainer = (props) => {
    return (
        <div style={{
            height: "100vh",//100vh - menubar
            width: "100vw",
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
            display: "grid",
            //TODO plan grid layout for pages

            //add content via props. like header(Component), content(Component),...
        }}>

            {props.children}
        </div>
    )
}
