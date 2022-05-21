import React from 'react';
import '../index.css'
import { NavBar } from '../components/navbar';
import { Hero } from '../components/hero';
import { Coupons } from '../components/coupons';
import { Services } from '../components/services';
import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Booking } from '../components/booking';
import { Testimonial } from '../components/testimonials';
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
            <Hero />
            {/* <Coupons /> */}
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