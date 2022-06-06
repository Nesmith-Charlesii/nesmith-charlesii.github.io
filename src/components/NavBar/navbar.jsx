import React, {useState, useEffect} from 'react';
import { makeStyles } from "@mui/styles";
import { useMediaQuery, useTheme, IconButton, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AllProLogo } from '../../assets/img/allProLogo';
import AnchorLink from 'react-anchor-link-smooth-scroll'
 
export const NavBar = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    navContainer: {
      position: "fixed",
      zIndex: 2,
      backgroundColor: "rgb(21,21,21);",
      height: "100px",
      width: "100vw",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    navLinkGroup: {
      position: "relative",
      right: "-200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      height: "100px",
      textTransform: "uppercase",
      fontFamily: "arial, sans-serif",
      listStyle: "none",
      '& #bookSlider': {
        position: "relative",
        backgroundColor: "rgb(255, 99, 0)",
        // paddingLeft: "30px",
        // paddingRight: "30px",
        transition: "300ms",
        '&:hover': {
          backgroundColor: "rgb(0, 50, 200)"
        },
        '& a': {
          fontWeight: "lighter",
          paddingTop: "10px",
          paddingBottom: "10px",
          width: "126px",
          display: "flex",
          justifyContent: "center"
        }
      }
    },
    hideNavBookBtn: {
      display: "none"
    },
    showNavBookBtn: {
      display: "block"
    },
    navGroupRefresh: {
      animationName: "$navRefresh",
      animationDuration: "550ms",
      animationIterationCount: 1,
      animationFillMode: "forwards",
   },
    navGroupSlider: {
       animationName: "$navSlider",
       animationDuration: "550ms",
       animationIterationCount: 1,
       animationFillMode: "forwards",
    },
    bookBtnSlider: {
       animationName: "$bookSlider",
       animationDuration: "550ms",
       animationIterationCount: 1,
       animationFillMode: "forwards",
    },
    navGroupReturn: {
      animationName: "$navReturn",
      animationDuration: "550ms",
      animationIterationCount: 1,
      animationFillMode: "forwards",
   },
   bookBtnReturn: {
      animationName: "$bookBtnReturn",
      animationDuration: "550ms",
      animationIterationCount: 1,
      animationFillMode: "forwards",
   },
    '@keyframes navSlider': {
      from: {
        right: "-200px"
        // right: "0px"
      },
      to: {
        right: "0px"
        // right: "242px"
      }
    },
    '@keyframes bookSlider': {
      "0%": {
        opacity: 0
      },
      "100%": {
        opacity: 1,
      }
    },
    '@keyframes navReturn': {
      from: {
        right: "0px"
        // right: "242px"
      },
      to: {
        right: "-200px"
        // right: "0px"
      }
    },
    '@keyframes bookBtnReturn': {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      },
    },
    '@keyframes navRefresh': {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1,
      }
    },
    navLink: {
      marginRight: "61px",
      fontSize: "12px",
      "& a": {
        position: "relative",
        bottom: 0,
        right: 0,
        display: "inline-block",
        textDecoration: "none",
        color: "rgb(255,255,255)",
        fontWeight: "bold",
        paddingTop: "15px",
        paddingBottom: "15px",
        transition: "color 300ms",
        '&:hover': {
          cursor: "pointer",
          textDecoration: "line-through",
          color: "rgb(255, 99, 0)"
        }
      }
    },
    navLinkBookBtn: {
      marginRight: "61px",
      fontSize: "12px",
      "& a": {
        position: "relative",
        bottom: 0,
        right: 0,
        display: "inline-block",
        textDecoration: "none",
        color: "rgb(255,255,255)",
        fontWeight: "bold",
        paddingTop: "15px",
        paddingBottom: "15px",
        width: "0px",
        '&:hover': {
          cursor: "pointer"
        }
      }
    },
    logo: {
      display: "flex",
      alignItems: "center",
      marginLeft: "61px",
      height: "100px",
      [theme.breakpoints.down(600)]: {
        marginLeft: "36px"
      },
    },
    allProLogo: {
      height: "170px",
      width: "170px",
      [theme.breakpoints.down(480)]: {
        height: "130px",
        width: "130px"
      },
    },
    navContact: {
      position: "absolute",
      left: "230px",
      color: "rgb(255,255,255)",
      fontFamily: "arial, sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      marginLeft: "30px",
      paddingLeft: "30px",
      fontWeight: "bold",
      borderLeft: "0.1em solid rgb(200,200,200)",
      '& p': {
        marginBottom: "2px",
        marginTop: "2px"
      },
      [theme.breakpoints.down(600)]: {
        display: "none"
      }
    },
    drawerPaper: {
      width: "100vw",
      padding: "18px 18px",
      boxSizing: "border-box",
      background: "rgba(14 ,14 ,14, .9) !important",
      overflowX: "hidden"
    },
    closeWrap: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end", 
      '& svg': {
        marginRight: "43px",
        marginTop: "15px",
        color: "#FFFFFF"
      }
    },
    mobile: {
      marginRight: "61px",
      '& svg': {
        color: "white",
        transform: "scale(1.3)",
      },
      [theme.breakpoints.down(600)]: {
        marginRight: "36px"
      },
    },
    mobileMenu: {
      height: "70vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      paddingLeft: "0px"
    },
    mobileMenuLinks: {
      listStyleType: "none",
      fontSize: "24px",
      fontFamily: "arial, sans-serif",
      textTransform: "uppercase",
      '& a': {
        color: "#FFFFFF",
        textDecoration: "none",
        '&:hover': {
          textDecoration: "line-through"
        }
      }
    },
  })

  const classes = useStyles();

  // const [scrollY, setScrollY] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(); 
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [count, setCount] = useState(0); 
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("1080"));

    const logScroll = () => {
        // setScrollY(() => window.scrollY)
        navIntersect()
    }

    const navIntersect = () => {
        let navBar = document.getElementById("navbar");
        let bookBtn = document.getElementById("bookBtn");
        // let page = document.querySelector("html");
        let navPos = navBar.getBoundingClientRect();
        let btnPos = bookBtn.getBoundingClientRect();
        // let pagePos = page.getBoundingClientRect();
        if(navPos.bottom > btnPos.bottom) {
          setCount(1);
          setIsIntersecting(true);
        } else if(navPos.bottom < btnPos.bottom && count > 0 ) {
          setIsIntersecting(false);
        }
    }

    const watchScroll = () => {
        window.addEventListener("scroll", logScroll)
        navIntersect();
    }

    useEffect(() => {
      if(!isSmallScreen) {
        watchScroll()
      }
    })

  return (
    <div className={classes.navContainer} id="navbar">
        <div className={classes.logo}>
          <div className={classes.allProLogo}>
          <AnchorLink href="#home">
            <AllProLogo/>
          </AnchorLink>
          </div>
          <div className={classes.navContact}>
            <div className={classes.navAddress}>
              <p>1219 n main st.</p>
              <p>fuquay-varina, nc 27526</p>
            </div>
            <div className={classes.navPhone}>
              <p>(919) 552-5622</p>
            </div>
          </div>
        </div>
        {
          !isSmallScreen ?
            <ul className={`${classes.navLinkGroup} ${isIntersecting === null ? null : isIntersecting === true ? classes.navGroupSlider : isIntersecting === false && count >= 1 ? classes.navGroupReturn : null} `} id="navLinkGroup">
              <li className={classes.navLink}><AnchorLink offset="170" href="#services" >services</AnchorLink></li>
              <li className={classes.navLink}><AnchorLink offset="100" href="#about">about</AnchorLink></li>
              <li className={classes.navLink}><AnchorLink offset="100" href="#contact">contact</AnchorLink></li>
              <li id="bookSlider" className={`${classes.navLinkBookBtn} ${isIntersecting === true ? `${classes.bookBtnSlider}` : classes.bookBtnReturn}`}><AnchorLink offset="100" href="#booking">book a service</AnchorLink></li>
            </ul>
            :
          <div className={classes.mobile}>
            <IconButton onClick={() => { setDrawerIsOpen(true) }}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="right"
                open={drawerIsOpen}
                onClose={() => { setDrawerIsOpen(false) }}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.closeWrap}>
                    <IconButton onClick={() => { setDrawerIsOpen(false) }}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <ul className={classes.mobileMenu}>
                    <li className={classes.mobileMenuLinks}><AnchorLink onClick={() => setDrawerIsOpen(false) } offset="145" href="#services" >services</AnchorLink></li>
                    <li className={classes.mobileMenuLinks}><AnchorLink onClick={() => setDrawerIsOpen(false) } offset="52" href="#about">about</AnchorLink></li>
                    <li className={classes.mobileMenuLinks}><AnchorLink onClick={() =>  setDrawerIsOpen(false) } offset="100" href="#contact">contact</AnchorLink></li>
                    <li className={classes.mobileMenuLinks}><AnchorLink onClick={() => setDrawerIsOpen(false) } offset="100" href="#booking">book a service</AnchorLink></li>
                </ul>
            </Drawer>
          </div>
        }
    </div>
  );
}