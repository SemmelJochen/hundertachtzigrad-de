import React, { useState } from 'react'
import { Element, Link } from 'react-scroll'
import { Button, makeStyles, SwipeableDrawer } from '@material-ui/core';
import { LandingVideo } from './LandingVideo';
import { Projects } from './Projects';
import { Crew } from './Crew';
import { AboutUs } from './AboutUs';
import { Contact } from './Contact';
import { ParallaxProvider } from 'react-scroll-parallax'

const useStyles = makeStyles(theme => ({
    navbar: {
        display: "flex",
        position: "sticky",
        justifyContent: "flex-end",
        alignItems: "center",
        top: 0,
        marginRight: "1rem",
        width: "100%",
        height: "50px",
        backgroundColor: theme.palette.contrast,
        zIndex: 100
    },
    navbarItem: {
        padding: "14px 16px",
        color: theme.palette.primary.dark,
        cursor: "pointer",
        zIndex: 200,
        '&:hover': {
            textDecoration: "line-through"
        }
    },
    header: {
        backgroundColor: "#f1f1f1", //gray
        textAlign: "center",
        height: "100vh"
    },
    content: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        position: "relative",
    },
    element: {
        //height: "calc(100vh - 50px)",
    },
    activeClass: {
        color: theme.palette.secondary.dark
    },
    desktopNavbar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '@media(max-width: 769px)': {
            display: "none"
        }
    },
    mobileNavbar: {
        '@media(min-width: 769px)': {
            display: "none"
        }
    }
}))

export const LandingPage = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const toggleDrawer = open => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };
    return (
        <ParallaxProvider>
            <div className={classes.header}>
                <LandingVideo onClick={() => scrollToTopElement} />
            </div>

            <SwipeableDrawer
                open={open}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                anchor={"right"}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >

                <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Links />
                </div>
            </SwipeableDrawer>

            <div className={classes.navbar}>
                {/** Links for computer site*/}
                <div className={classes.desktopNavbar}>
                    <Links />
                </div>
                <div className={classes.mobileNavbar}>
                    <Button onClick={toggleDrawer(true)}> OPEN </Button>
                </div>

            </div>

            <div className={classes.content}>
                <Element name="project-container" className={classes.element}>
                    <Projects />
                </Element>
                <Element name="crew-container" className={classes.element}>
                    <Crew />
                </Element>
                <Element name="about-container" className={classes.element}>
                    <AboutUs />
                </Element>
                <Element name="contact-container" className={classes.element}>
                    <Contact />
                </Element>

            </div>
        </ParallaxProvider>
    )
}

function scrollToTopElement() {
    var Scroll = require('react-scroll');
    var scroller = Scroll.scroller;

    // Somewhere else, even another file
    scroller.scrollTo('project-container', {
        duration: 500,
        smooth: true,
        offset: -50, // Scrolls to element + 50 pixels down the page
    })
}
const Links = () => {
    const classes = useStyles();
    return (
        <>
            <Link className={classes.navbarItem}
                activeClass={classes.activeClass}
                to="project-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                PROJECTS
                </Link>
            <Link className={classes.navbarItem}
                activeClass={classes.activeClass}
                to="crew-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                CREW
                </Link>
            <Link className={classes.navbarItem}
                activeClass={classes.activeClass}
                to="about-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                ABOUT US
                </Link>
            <Link className={classes.navbarItem}
                activeClass={classes.activeClass}
                to="contact-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                KONTAKT
                </Link>
        </  >
    )

}