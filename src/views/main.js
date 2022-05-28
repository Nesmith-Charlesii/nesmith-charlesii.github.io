import React from 'react';
import '../index.css'
import { NavBar } from '../components/NavBar/navbar';
import { Hero } from '../components/Hero/hero';
import { Services } from '../components/Services/services';
import { About } from '../components/About/about';
import { Contact } from '../components/Contact/contact';
import { Booking } from '../components/Booking/booking';
import { Testimonial } from '../components/Reviews/testimonials';
import { Location } from '../components/location';
import { createUseStyles } from 'react-jss';

export const Main = () => {
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
    })

    const classes = useStyles();

    return (
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
    )
}