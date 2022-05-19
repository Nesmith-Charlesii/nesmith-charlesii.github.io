import React from 'react';
import { createUseStyles } from 'react-jss';

export const Booking = () => {
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
            }
        },
        bookingForm: {
            display: "flex",
            justifyContent: "center",
            height: "60%",
            width: "70%"
        },
        
    })
    
    const classes = useStyles();

    const searchFormTimes = (input) => {

    }

    return (
        <section className={classes.bookingSection} id="booking">
            <div className={classes.bookingContainer}>
                <div className={classes.bookingHeader}>
                    <p>Book Your</p>
                    <p>Service Today</p>
                </div>
                <div className={classes.bookingForm}>
                    <iframe id="booking-form" src="https://allproautocenter.setmore.com/" scrolling="yes" width="100%" height="100%" frameBorder="3" ></iframe>
                </div>
            </div>
        </section>
    )
}