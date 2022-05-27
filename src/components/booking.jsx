import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTheme, useMediaQuery } from '@mui/material'
import BookingCta from '../assets/img/cta_bk_2.svg'
import {ReactComponent as CtaArrow} from '../assets/img/cta_arrow.svg'

export const Booking = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        bookingSection: {
            height: "120vh",
            backgroundColor: "rgb(255, 99, 0)",
            [theme.breakpoints.down(800)]: {
                backgroundImage: `url(${BookingCta})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "initial",
                backgroundSize: "auto 100vw",
                height: "auto"
            }
        },
        bookingContainer: {
            height: "100%",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        bookingHeader: {
            position: "relative",
            paddingTop: "80px",
            width: "100%",
            fontFamily: "'Chivo', sans-serif",
            fontSize: "54px",
            color: "rgb(255, 255, 255)",
            textAlign: "center",
            marginBottom: "70px",
            '& p': {
                textTransform: "uppercase",
                marginTop: 0,
                marginBottom: "-12px"
            },
            [theme.breakpoints.down(800)]: {
                paddingTop: "50px",
                marginBottom: "60px"
            },
            [theme.breakpoints.down(700)]: {
                fontSize: "46px"
            },
            [theme.breakpoints.down(480)]: {
                fontSize: "38px"
            }
        },
        bookingForm: {
            display: "flex",
            justifyContent: "center",
            height: "65%",
            width: "75vw",
            [theme.breakpoints.down(800)]: {
                display: "none"
            }
        },
        bookingCtaMobile: {
            height: "auto",
            width: "220px",
            backgroundColor: "rgb(21, 21, 21)",
            display: "flex",
            justifyContent: "center",
            marginBottom: "75px",
            boxSizing: "border-box",
            padding: "3px 10px",
            '& p': {
                fontFamily: "arial, helvetica",
                fontSize: "14px",
                fontWeight: 600,
                marginRight: "20px"
            },
            '& a': {
                textDecoration: "none",
                color: "#FFFFFF"
            },
            [theme.breakpoints.down(480)]: {
                width: "200px"
            }
        },
        mobileCtaContext: {
            display: "flex",
            alignItems: "center"
        }
    })
    
    const classes = useStyles();
    const mobileView = useMediaQuery(theme.breakpoints.down(800));

    return (
        <section className={classes.bookingSection} id="booking">
            <div className={classes.bookingContainer}>
                <div className={classes.bookingHeader}>
                    <p>Book Your</p>
                    <p>Service Today</p>
                </div>
                {
                    !mobileView ?

                    <div className={classes.bookingForm}>
                        <iframe id="booking-form" src="https://allproautocenter.setmore.com/" scrolling="yes" width="100%" height="100%" frameBorder="3" title='setmore booking'></iframe>
                    </div>

                    :

                    <div className={classes.bookingCtaMobile}>
                        <a href='https://allproautocenter.setmore.com/' target="_blank" rel="noreferrer">
                            <div className={classes.mobileCtaContext}>
                                <p>GET STARTED</p>
                                <CtaArrow />
                            </div>
                        </a>
                    </div>
                }
            </div>
        </section>
    )
}