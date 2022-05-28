import React from 'react';
import { createUseStyles } from 'react-jss';
import HeroImage from '../../assets/img/heroImage2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTheme, useMediaQuery } from '@mui/material'

export const Hero = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        heroContainer: {
            height: "100vh",
            position: "relative",
            // paddingTop: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        heroBackground: {
            height: "100%",
            width: "100%",
            backgroundColor: "rgb(80,80,80);",
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: "brightness(50%) contrast(110%)",
        },
        heroContent: {
            width: "100%",
            position: "absolute",
        },
        heroText: {
            position: "relative",
            textAlign: "center",
            fontFamily: "helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: "28px",
            textTransform: "uppercase",
            color: "rgba(255,255,255, 1);",
            "& h1": {
                marginTop: "-14px",
                marginBottom: 0,
                fontFamily: "'Chivo', sans-serif",
                [theme.breakpoints.down(700)]: {
                    marginTop: "-10px"
                },
                [theme.breakpoints.down(440)]: {
                    marginTop: "-8px"
                },
                [theme.breakpoints.down(415)]: {
                    marginTop: "-5px"
                },
            },
            [theme.breakpoints.down(700)]: {
                fontSize: "22px",
            },
            [theme.breakpoints.down(600)]: {
                transform: "scale(.9)"
            },
            [theme.breakpoints.down(440)]: {
                fontSize: "20px"
            },
            [theme.breakpoints.down(415)]: {
                fontSize: "18px"
            },
            [theme.breakpoints.down(380)]: {
                fontSize: "16px"
            },
        },
        bookBtn: {
            height: "40px",
            marginTop: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
            color: "rgb(255,255,255)",
            backgroundColor: "rgb(255, 99, 0)",
            border: "transparent",
            textTransform: "uppercase",
            fontSize: "12px",
            transition: "300ms",
            transitionTimingFunction: "ease-in-out",
            "&:hover": {
                backgroundColor: "rgb(0, 50, 200)",
                cursor: "pointer"
            },
            '& a': {
                textDecoration: "none",
                color: "#FFFFFF"
            }
        },
        bookBtnMobile: {
            fontFamily: "arial, helvetica",
            fontSize: "1.9vh",
            fontWeight: 600,
        },
        heroTextAnimation: {
            animationName: "$heroTextAnimation",
            animationDuration: "1.5s",
            animationFillMode: "forwards",
            animationIterationCount: 1
        },
        "@keyframes heroTextAnimation": {
            "0%": {
                opacity: 0,
                bottom: -20
            },
            "100%": {
                opacity: 1,
                bottom: 0
            }
        },
    })

    const classes = useStyles();
    const mobileView = useMediaQuery(theme.breakpoints.down("800"));

    return (
        <div id="home" className={classes.heroContainer}>
            <div className={classes.heroBackground}>
                
            </div>
            <div className={`${classes.heroContent} `}>
                <div className={`${classes.heroText} ${classes.heroTextAnimation}`}>
                    <h1>our mission:</h1> 
                    <h1>to keep your car</h1>
                    <h1>on the road</h1>
                    {
                        !mobileView ?

                        <AnchorLink offset="100" href="#booking"><button className={classes.bookBtn} id="bookBtn">book a service</button></AnchorLink>

                        : 

                        <a href='https://allproautocenter.setmore.com/' target="_blank" rel="noreferrer"><button className={`${classes.bookBtnMobile} ${classes.bookBtn}`} id="bookBtn">book a service</button></a>
                    }
                </div>
            </div>
        </div>
    )
}