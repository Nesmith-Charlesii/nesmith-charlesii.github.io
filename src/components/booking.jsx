import React from 'react';
import { createUseStyles } from 'react-jss';

export const Booking = () => {
    const useStyles = createUseStyles({
        bookingSection: {
            height: "120vh",
            backgroundColor: "rgb(255, 99, 0)",
            scrollMarginTop: "180px"
        },
        bookingContainer: {
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        bookingHeader: {
            paddingTop: "70px",
            width: "100%",
            fontFamily: "'Chivo', sans-serif",
            fontSize: "40px",
            color: "rgb(255, 255, 255)",
            textAlign: "center",
            '& p': {
                textTransform: "uppercase",
                marginTop: 0,
                marginBottom: "-12px"
            }
        },
    })
    
    const classes = useStyles();

    const searchFormTimes = (input) => {

    }

    return (
        <section className={classes.bookingSection} id="booking">
            <div className={classes.bookingContainer}>
                {/* <div className={classes.bookingHeader}>
                    <p>our</p>
                    <p>services</p>
                </div> */}
                {/* <div className={classes.bookingFormContainer}>
                    <form className={classes.bookingForm}>
                    <div className={classes.formRow1}>
                        <input type="text" id="first-name" placeholder='first name' />
                        <input type="text" id="first-name" placeholder='last name' />
                    </div>
                    <div className={classes.formRow2}>
                        <input type="text" id="first-name" placeholder='phone number' />
                        <input type="text" id="first-name" placeholder='email address' />
                    </div>
                    <div className={classes.formRow3}>
                        <input type="text" id="first-name" placeholder='make' />
                        <input type="text" id="first-name" placeholder='model' />
                        <input type="text" id="first-name" placeholder='year' />
                    </div>
                    <div className={classes.formRow4}>
                        
                    </div>
                    <div className={classes.formRow5}>
                        
                    </div>
                    </form>
                </div> */}
                <iframe src="https://allproautocenter.setmore.com/" scrolling="yes" width="60%" height="60%" frameborder="3" ></iframe>
            </div>
        </section>
    )
}