import React, { useState } from 'react';
import '../index.css';
import { NavBar } from '../components/NavBar/navbar';
import { Hero } from '../components/Hero/hero';
import { Services } from '../components/Services/services';
import { About } from '../components/About/about';
import { Contact } from '../components/Contact/contact';
import { Booking } from '../components/Booking/booking';
import { Testimonial } from '../components/Reviews/testimonials';
import { Location } from '../components/location';
import { createUseStyles } from 'react-jss';
import BookingCta from '../assets/img/cta_bk_2.svg'
import { useTheme } from '@mui/material';

export const Main = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        footer: {
            backgroundColor: "rgb(21,21,21);",
            color: "rgb(255,255,255)",
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
            fontSize: "12px"
        },
        coupons: {
            position: "relative"
        },
        pendingApproval: {
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${BookingCta})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgb(255, 99, 0)",
            '& p': {
                fontSize: "100px",
                fontFamily: "arial, helvetica",
                fontWeight: 700,
                textAlign: "center",
                padding: "0px 40px",
                [theme.breakpoints.down(600)]: {
                    transform: "scale(.8)"
                },
                [theme.breakpoints.down(460)]: {
                    transform: "scale(.6)"
                },
                [theme.breakpoints.down(330)]: {
                    transform: "scale(.4)"
                },
            }
        }
    })

    const classes = useStyles();
    const [maintenance, setMainenance] = useState(false)

    return (
        <>

        {
            maintenance === true ?

            <div className={classes.pendingApproval}>
                <p>Site Pending Approval</p>
            </div>

            :

            <div className={classes.mainContainer}>
                <NavBar />
                <Hero/>
                <Services />
                <About />
                <Contact />
                <Booking />
                <Testimonial /> 
                <Location />
                <footer className={classes.footer}>
                    <p>&copy; 2021 All Pro Auto. All Rights Reserved</p>
                </footer>
            </div>
           
        }

        </>
    )
}