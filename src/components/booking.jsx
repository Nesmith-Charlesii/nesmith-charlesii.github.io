import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTheme, useMediaQuery } from '@mui/material'

export const Booking = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        bookingSection: {
            height: "120vh",
            backgroundColor: "rgb(255, 99, 0)",
            // scrollMarginTop: "120px"
        },
        bookingContainer: {
            height: "100%",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        bookingHeader: {
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
            width: "75vw"
        },
        bookingCta: {
            height: "100%"
        }

    })
    
    const classes = useStyles();
    const mobileView = useMediaQuery(theme.breakpoints.down(600));

    return (
        <section className={classes.bookingSection} id="booking">
            <div className={classes.bookingContainer}>
                <div className={classes.bookingHeader}>
                    <p>Book Your</p>
                    <p>Service Today</p>
                </div>
                <div className={classes.bookingForm}>
                    <iframe id="booking-form" src="https://allproautocenter.setmore.com/" scrolling="yes" width="100%" height="100%" frameBorder="3" title='setmore booking'></iframe>
                </div>
            </div>
        </section>
    )
}