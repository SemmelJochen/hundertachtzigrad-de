import React from 'react'
import { CrewFrame } from '../components/crewframe/CrewFrame'
import { ParallaxContainer } from '../components/parallax/ParallaxContainer'
import { SectionHeadline } from '../components/sectionheadline/SectionHeadline'

import kevin from '../assets/img/3d/kevin.mp4'
import marvin from '../assets/img/3d/marvin.mp4'
import patrick from '../assets/img/3d/patrick.mp4'
import noah from '../assets/img/3d/noah.mp4'
import samuel from '../assets/img/3d/samuel.mp4'

import kevinImg from '../assets/img/3d/kevin.JPG'
import marvinImg from '../assets/img/3d/marvin.JPG'
import patrickImg from '../assets/img/3d/patrick.JPG'
import noahImg from '../assets/img/3d/noah.JPG'
import samuelImg from '../assets/img/3d/samuel.JPG'

import typen from '../assets/img/01.JPG'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    item: {
        margin: "15px"
    },
}))
export const Crew = () => {
    const classes = useStyles();
    return (
        <ParallaxContainer style={{ display: "flex", justifyContent: "center" }} image={typen}
            header={<SectionHeadline title="Crew" />}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    width: "75%",
                }}
            >
                <CrewFrame className={classes.item}
                    img={kevin} overlay={kevinImg}
                    text="Kevin"
                //textTranslate={"20px, 20px"}
                //lineOffset={3}
                />
                <CrewFrame
                    className={classes.item}
                    img={marvin}
                    overlay={marvinImg}
                    text="Marvin"
                //textTranslate={"-30px, 0px"} 
                />
                <CrewFrame
                    className={classes.item}
                    img={patrick}
                    overlay={patrickImg}
                    text="Patrick"
                    //textTranslate={"-20px, 20px"}
                />
                <CrewFrame
                    className={classes.item}
                    img={noah}
                    overlay={noahImg}
                    text="Noah"
                    //textTranslate={"20px, 10px"}
                />
                <CrewFrame
                    className={classes.item}
                    img={samuel}
                    overlay={samuelImg}
                    text="Samuel"
                    //textTranslate={"-20px, -10px"}
                />

            </div>
        </ParallaxContainer>
    )
}
