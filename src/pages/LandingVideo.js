import { IconButton, makeStyles } from '@material-ui/core'
import React from 'react'
import landingVideo from '../assets/video/titelbild.mp4'
import logo from '../assets/img/hundertachtzigrad.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    videoContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    videoPlayer: {
        transform: "translate(-50%, -50%)",
        position: "fixed",
        top: "50%",
        left: "50%",
        overflow: "hidden",
        /* Make video to at least 100% wide and tall */
        minWidth: "100%",
        minHeight: "100%",

        /* Setting width & height to auto prevents the browser from stretching or squishing the video */
        width: "auto",
        height: "auto",
        zIndex: 0
    },
    content: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
    },
    expandButton: {
        position: "absolute",
        bottom: "1rem",
        width: "100%",
        justifyContent: "center"
    }
}));

export const LandingVideo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.videoContainer}>
            <video
                className={classes.videoPlayer}
                autoPlay
                muted
                loop
                id="landing-video">
                <source src={landingVideo} type="video/mp4" />
            </video>

            <div className={classes.content}>
                <img alt="logo" src={logo} style={{ width: "75%" }} />
            </div>
            <div className={classes.expandButton}>
                <IconButton onClick={props.onClick()  }>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

        </div>
    )
}
