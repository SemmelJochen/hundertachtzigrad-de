import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles(theme => ({
    line: {
        transform: "translate(-50px, 0px)",
        backgroundColor: theme.palette.secondary.main,
        width: "60%",
        '@media (max-width:600px)': {
            width: "auto"
        },
        height: "25px",
        //marginRight: "50px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    text: {
        transform: "translate(0px, -12.5px) rotate(180deg)",
        color: theme.palette.primary.dark,
        textTransform: "uppercase",
        letterSpacing: 10,
        transition: "transform 0.5s",
        '&:hover': {
            transition: "transform 0.3s ease-in-out",
            transform: "translate(0px, -12.5px)"
        },

    }
}));

export const SectionHeadline = (props) => {
    const classes = useStyles();
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "20% 20% 20% 20% 20%",
                gap: "0px 0px",
                gridTemplateAreas: `"."
                                    "."
                                    "line"
                                    "."
                                    "."`,

            }}>

            <div style={{
                gridArea: "line",
                //zIndex: "100",
                textAlign: "left",
                //maxHeight: "40px",
            }}>
                <div className={classes.line}>
                    <Typography variant="h3" className={classes.text}>
                        {props.title}
                    </Typography>
                </div>

            </div>
        </div>
    )
}
