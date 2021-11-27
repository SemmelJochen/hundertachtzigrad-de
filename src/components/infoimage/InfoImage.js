import { makeStyles } from '@material-ui/core'
import React from 'react'
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
    imgTextWrap: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: fade(theme.palette.primary.light, 0.5),
        color: theme.palette.contrast,
        visibility: "hidden",
        opacity: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        /* hover off*/
        transition: "opacity 0.3s ease-in, visibility 0.3s",

        '&:hover': {
            visibility: "visible",
            opacity: 1,
            /* hover on*/
            transition: "opacity 0.2s ease-out, visibility 0.2s",
        }
    },
    imgWrap: {
        position: "relative",
        display: "inherit",
        height: "fit-content",
        width: "fit-content",

        '&:hover': {
            '& $imgTextWrap': {
                visibility: "visible",
                opacity: 1,
                /* hover on*/
                transition: "opacity 0.2s ease-out, visibility 0.2s",
            }
        },
    },
    img: {
        objectFit: "cover",
        maxWidth: "400px", 
        minWidth: "85%",
        '@media( max-width: 600px)': {
            maxWidth: "300px",
            
        }
    }

}));

export const InfoImage = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.imgWrap} style={props.divStyle}>
            <img className={classes.img} alt="img" src={props.img}  />
            <div className={classes.imgTextWrap} >
                {props.textComponent}
            </div>

        </div >
    )
}
