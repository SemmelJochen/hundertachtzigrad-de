import { makeStyles, withTheme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    header: {
        position: "sticky",
        top: -63,
        //zIndex: 101,
        height: "220px",
        '@media (max-width:600px)': {
            zIndex: 99,
        },
    },
    root: {
        backgroundAttachment: "fixed",
        flexWrap: "nowrap",
        flexDirection: "column",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        display: "flex",
        webkitTransform: "translatez(0)",
        transform: "translatez(0)",
        willChange: "transform"
    },
}))

const ParallaxBanner = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ backgroundImage: `url(${props.image})` }}>
            <div className={classes.header}>{props.header}</div>
            <div style={{ ...props.style, backgroundColor: props.theme.palette.contrast }}>{props.children}</div>
        </div>
    )
}

export const ParallaxContainer = withTheme(ParallaxBanner);