import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTheme } from '@mui/material';

export const About = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        aboutSection: {
            height: "88vh",
            width: "100vw",
        },
        aboutContainer: {
            position: "relative",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 40px 0px 40px",
            [theme.breakpoints.down(1020)]: {
                flexDirection: "column"
            }
        },
        aboutContext: {
            position: "relative",
            marginRight: "80px",
            [theme.breakpoints.down(1020)]: {
                marginBottom: "50px",
                textAlign: "center",
                marginRight: "0px"
            }
        },
        aboutHeader: {
            fontSize: "54px",
            fontFamily: "'Chivo', sans-serif",
            textTransform: "uppercase",
            '& p': {
                marginBottom: 0,
                marginTop: "-12px"
            },
            [theme.breakpoints.down(1020)]: {
                marginTop: "100px",
                marginBottom: "20px"
            },
            [theme.breakpoints.down(700)]: {
                fontSize: "46px"
            },
            [theme.breakpoints.down(480)]: {
                fontSize: "38px"
            }
        },
        aboutContent: {
            marginTop: "10px",
            maxWidth: "34vw",
            fontFamily: 'Raleway, sans-serif',
            fontSize: "2.3vh",
            [theme.breakpoints.down(1020)]: {
                maxWidth: "80vw",
            }
        },
        image: {
            position: "relative",
            top: "10px",
            left: "25px",
            height: "68vh",
            width: "57vw",
            backgroundColor: "rgb(40,40,40)"
        },
        box: {
            position: "relative",
            height: "46vh",
            width: "46vw",
            backgroundColor: "rgb(40,40,40)",
            [theme.breakpoints.down(1020)]: {
                width: "100vw",
                height: "48vh"
            }
        },
        orangeBox: {
            position: "absolute",
            height: "34vh",
            width: "30vw",
            right: "310px",
            backgroundColor: "rgb(255, 99, 0)",
        }
    })

    const classes = useStyles()

    return (
        <div id="about" className={classes.aboutSection}>
            <div className={classes.aboutContainer}>
                <div className={classes.aboutContext}>
                    <div className={classes.aboutHeader}>
                        <p>all about</p>
                        <p>all pro auto</p>
                    </div>
                    <div className={classes.aboutContent}>
                    We are a one stop shop, full-service preventive maintenance and auto repairs center in Fuquay Varina. Our doors first opened in 2008 and we have been helping customers keep their cars on the road ever since. We pride ourselves on our quality work with over 45 years of combined auto repair experience, working on both domestic and foreign vehicles. Stop in or book a service online to let us know how we can help. We look forward to working with you.
                    </div>
                </div>
                {/* <div className={classes.orangeBox}>
                    
                </div> */}
                <div className={classes.box}>

                </div>
            </div>
        </div>
    )
}