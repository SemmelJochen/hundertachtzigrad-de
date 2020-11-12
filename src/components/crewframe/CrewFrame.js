import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    text: ({ textTranslate }) => ({
        color: theme.palette.secondary.dark,
        transform: `translate(${textTranslate})`,
        textTransform: "uppercase",
        textShadow: `-2px -2px 0px ${theme.palette.secondary.light}`,
        //letterSpacing: 2
        //fontWeight: 600
    }),
    line: {
        transform: "translate(-50px, 0px)",
        backgroundColor: theme.palette.primary.light,
        width: "300px",
        height: "30px",
        marginRight: "50px",
    },
    root: {
        width: "361px",
        height: "fit-content",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(5, 1fr)",
        gridColumnGap: "0px",
        gridRowGap: "0px",
    }
}));

export const CrewFrame = ({ className, textTranslate, text, img, lineOffset, overlay }) => {
    if (typeof lineOffset === "undefined") {
        lineOffset = 2;
    }
    const classes = useStyles({ textTranslate });
    return (
        <div className={className}>
            <div className={classes.root}>
                <div style={{
                    gridArea: `1 / 1 / 6 / 2`,
                }}>
                    <HoverVideoPlayer
                        videoSrc={img}
                        pausedOverlay={<img src={overlay} style={{ width: "100%", height: "100%" }} alt="" />}
                        loadingOverlay={<img src={overlay} style={{ width: "100%", height: "100%" }} alt="" />}
                    />
                </div>
                <div style={{
                    gridArea: `${lineOffset} / 1 / ${lineOffset + 1} / 2`,
                    //gridArea: `3 / 1 / 4 / 2`,
                    zIndex: "100",
                    textAlign: "right",
                    //maxHeight: "40px",
                }}>
                    <div className={classes.line}>
                        <Typography className={classes.text} variant="h4" >{text}</Typography>
                    </div>

                </div>
            </div>
        </div>
    )
}


CrewFrame.propTypes = {
    textTranslate: PropTypes.string,
    text: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    overlay: PropTypes.object,
    className: PropTypes.element,
    lineOffset: PropTypes.oneOf(3, 4, 5, 6),
}