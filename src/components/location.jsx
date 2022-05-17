import React from 'react';
import { createUseStyles } from 'react-jss';

export const Location = () => {
    const useStyles = createUseStyles({
        locationSection: {
            height: "79vh",
        },
        locationContainer: {
            height: "100%"
        },
    })

    const classes = useStyles();
    return (
        <section id="location" className={classes.locationSection}>
            <div className={classes.locationContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.44251968526!2d-78.78374638480156!3d35.59214934245989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8f11fde9edbd%3A0x7196032eae29993c!2s1219%20N%20Main%20St%2C%20Fuquay-Varina%2C%20NC%2027526!5e0!3m2!1sen!2sus!4v1639282692096!5m2!1sen!2sus" title="all-pro-auto-location" width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy"></iframe>
            </div>
        </section>
    )
}