import React from 'react';
import { createUseStyles } from 'react-jss';
import {ReactComponent as CouponOne} from '../assets/img/oil_coupon_update.svg'
import {ReactComponent as CouponTwo} from '../assets/img/coupon2.svg'
import { useTheme } from '@mui/material';

export const Coupons = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        couponContainer: {
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            marginTop: "-90px",
            zIndex: 1,
            [theme.breakpoints.down(1210)]: {
                transform: "scale(.8)"
            },
            [theme.breakpoints.down(1000)]: {
                transform: "scale(.75)"
            },
            [theme.breakpoints.down(860)]: {
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "-14px",
                marginTop: "-120px"
            },
            [theme.breakpoints.down(480)]: {
                transform: "scale(.6)"
            },
            [theme.breakpoints.down(380)]: {
                transform: "scale(.55)"
            },
        },
        couponLeft: {
            marginRight: "-50px",
            '& svg': {
                width: "600px",
                height: "151px"
            }
        },
        couponRight: {
            '& svg': {
                width: "600px",
                height: "151px",
                [theme.breakpoints.down(860)]: {
                    marginLeft: "52px"
                }
            }
        },
        couponTrimLeft: {
            boxSizing: "border-box",
            padding: "10px",
            width: "100%",
            height: "100%",
            border: "2px solid white",
            display: "flex",
        },
        couponTrimRight: {
            boxSizing: "border-box",
            padding: "10px",
            width: "100%",
            height: "100%",
            border: "2px solid black",
            display: "flex",
        },
        couponText: {
            width: "50%",
        },
        couponHeader: {
            fontFamily: "'Chivo', sans-serif"
        },
        couponIcon: {
            width: "50%",
        }
    })
    
    const classes = useStyles();

    return(
        <div className={classes.couponContainer}>
            <div className={classes.couponLeft}>
                <CouponOne />
            </div>
            <div className={classes.couponRight}>
                <CouponTwo />
            </div>
        </div>
    )
}