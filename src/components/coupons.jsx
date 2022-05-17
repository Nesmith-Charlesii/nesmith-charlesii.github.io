import React from 'react';
import { createUseStyles } from 'react-jss';
import {ReactComponent as CouponOne} from '../assets/img/coupon1.svg'
import {ReactComponent as CouponTwo} from '../assets/img/coupon2.svg'

export const Coupons = () => {
    const useStyles = createUseStyles({
        couponContainer: {
            position: "relative",
            bottom: "110px",
            display: "flex",
            justifyContent: "center",
            // height: "100px",
            width: "100vw",
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
                height: "151px"
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
                {/* <div className={classes.couponTrimLeft}>
                    <div className={classes.couponText}>
                        <div className={classes.couponHeader}>
                            <h2>Maintenance Service</h2>
                        </div>
                        <div className="couponContent">
                            <p>
                                jaoifjiofjiajfoijaifjiajfajiofjifjaoifjiajfojfijafjaifjijofjaiofjioj
                            </p>
                        </div>
                    </div>
                    <div className={classes.couponIcon}>

                    </div>
                </div> */}
            </div>
            <div className={classes.couponRight}>
                <CouponTwo />
                {/* <div className={classes.couponTrimRight}>
                    <div className={classes.couponText}>
                        <div className={classes.couponHeader}>
                            <h2>Brake Check</h2>
                        </div>
                        <div className="couponContent">
                            <p>
                                jaoifjiofjiajfoijaifjiajfajiofjifjaoifjiajfojfijafjaifjijofjaiofjioj
                            </p>
                        </div>
                    </div>
                    <div className={classes.couponIcon}>

                    </div>
                </div> */}
            </div>
        </div>
    )
}