import { makeStyles, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { ParallaxContainer } from '../components/parallax/ParallaxContainer';
import { SectionHeadline } from '../components/sectionheadline/SectionHeadline';
import auto from '../ressources/img/02.JPG'
import typen from '../ressources/img/01.JPG'
import dude from '../ressources/img/04.JPG'
import klappe from '../ressources/img/03.JPG'
import { InfoImage } from '../components/infoimage/InfoImage';


const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    },
    projects: {
        marginTop: "2rem",
        width: "75%",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        flex: "0 70%",
    },
}));

export const Projects = () => {
    const classes = useStyles();
    return (
        <ParallaxContainer style={{ display: "flex", justifyContent: "center" }} image={auto}
            header={<SectionHeadline title="Projects" />}
        >
            <div style={{ height: "100vh" }}></div>
            
             <div className={classes.projects}>
                <InfoImage
                    textComponent={
                        <>
                            <StyledTypo variant="h4">
                                Kuhle
                            </StyledTypo>
                            <StyledTypo variant="h4">
                                Typen
                            </StyledTypo>
                        </>
                    }
                    img={typen}
                    imgStyle={{ maxWidth: "400px", minWidth: "85%" }}
                    divStyle={{ margin: "15px" }}
                />

                <InfoImage
                    textComponent={
                        <>
                            <StyledTypo variant="h4">
                                Audo -
                            </StyledTypo>
                            <StyledTypo variant="h4">
                                Teddy?!
                            </StyledTypo>
                        </>
                    }
                    img={auto}
                    imgStyle={{ maxWidth: "400px", minWidth: "85%" }}
                    divStyle={{ margin: "15px" }}
                />

                <InfoImage
                    textComponent={
                        <StyledTypo variant="h6">
                            Mittach?!
                        </StyledTypo>
                    }
                    img={dude}
                    imgStyle={{ maxWidth: "300px", minWidth: "75%" }}
                    divStyle={{ margin: "15px" }}
                />
                <InfoImage
                    textComponent={
                        <StyledTypo variant="h5">
                            Klappe!
                        </StyledTypo>
                    }
                    img={klappe}
                    imgStyle={{ maxWidth: "300px", minWidth: "75%"}}
                    divStyle={{ margin: "15px" }}
                />
            </div>
            

        </ParallaxContainer>
    )
}

const StyledTypo = withStyles({

    root: {
        textTransform: "uppercase",
        fontWeight: 700,
        letterSpacing: 10,
    },
})(Typography);
