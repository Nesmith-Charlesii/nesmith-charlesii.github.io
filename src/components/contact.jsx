import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTheme } from '@mui/material'

export const Contact = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        contactContainer: {
            backgroundColor: "rgb(50,50,50);",
            height: "100px",
            justifyContent: "space-evenly",
            display: "flex",
            alignItems: "center",
            color: "rgb(245,245,245)",
            width: "100%",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Chivo', sans-serif",
            '& p': {
                marginBottom: 0,
                marginTop: "0px",
                textAlign: "center",
                '& a': {
                    textDecoration: "none",
                    color: "rgb(210,210,210)",
                    transition: "color 500ms",
                    '&:hover': {
                        color: "rgba(255,255,255)",
                    }
                },
                [theme.breakpoints.down(375)]: {
                    fontSize: "14px"
                }
            },
            [theme.breakpoints.down('800')]: {
                boxSizing: "border-box",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                padding: "30px 0px 30px 0px"
            },
        },
        divider: {
            borderLeft: "1px solid rgb(210,210,210)",
            height: "50px",
            [theme.breakpoints.down('800')]: {
                transform: "rotate(90deg) scale(2.5)",
            },
        },
    })

    const classes = useStyles();
    return (
        <div id="contact" className={classes.contactContainer}>
            <div className={classes.location}>
                <p>fax: (919) 557-2367</p>
            </div>
            <p className={classes.divider}></p>
            <div className={classes.number}>
                <p>autocenter.allpro@gmail.com</p>
            </div>
            <p className={classes.divider}></p>
            <div className={classes.hours}>
                <p>mon - fri: 8am - 5pm</p>
            </div>
        </div>
    )
}