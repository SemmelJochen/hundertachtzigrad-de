import { Button, makeStyles, SwipeableDrawer } from '@material-ui/core';
import { ReportOff } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import { Element, Link } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AboutUs } from './AboutUs';
import { Contact } from './Contact';
import { Crew } from './Crew';
import { LandingVideo } from './LandingVideo';
import { Projects } from './Projects';
import "./style.css"

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
        zIndex: 20,
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
    },
    toggleButton: {
        fontSize: "3rem",
        color: "rgb(36,36,36)",
        padding: 0,
        border: "none",
        background: "none"
    }

}))

export const LandingPage = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const toggleMenu = open => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const ref = useRef(null);
    const handleClick = (event) => {
        console.log(ref)
        ref.current.checked = false
    }


    return (
        <>
            <ParallaxProvider>
                <div className={classes.header}>
                    <LandingVideo onClick={() => scrollToTopElement} />
                </div>

                {/*<SwipeableDrawer
                open={isOpen}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                anchor={"right"}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >

                <div style={{ marginTop: '50px', width: "100vw", height: "calc(100vh - 50px)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Links />
                </div>
            </SwipeableDrawer>
            */}


                <div className={classes.navbar}>
                    {/** Links for computer site*/}
                    <div className={classes.desktopNavbar}>
                        <Links />
                    </div>

                    <div className={classes.mobileNavbar} unselectable="on">
                        {/*<Button onClick={toggleMenu(true)}> OPEN </Button>*/}
                        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" ref={ref} />
                        <label for="menu-icon"></label>
                        <nav class="nav">
                            <ul class="pt-5">

                                <Links onClick={handleClick} />
                            </ul>
                        </nav>
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
        </>
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
const Links = (props) => {
    const classes = useStyles();

    return (
        <>
            <li>
                <Link className={classes.navbarItem}
                    activeClass={classes.activeClass}
                    to="project-container"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.onClick}
                >
                    PROJECTS
                </Link>
            </li>
            <li>
                <Link className={classes.navbarItem}
                    activeClass={classes.activeClass}
                    to="crew-container"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.onClick}
                >
                    CREW
                </Link>
            </li>
            <li>
                <Link className={classes.navbarItem}
                    activeClass={classes.activeClass}
                    to="about-container"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.onClick}
                >
                    ABOUT US
                </Link>
            </li>
            <li>
                <Link className={classes.navbarItem}
                    activeClass={classes.activeClass}
                    to="contact-container"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={props.onClick}
                >
                    KONTAKT
                </Link>
            </li>
        </  >
    )

}