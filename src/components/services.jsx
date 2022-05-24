import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import  { ReactComponent as AutoRepair } from '../assets/img/autoRepair.svg';
import  { ReactComponent as AcRepair } from '../assets/img/acRepair.svg';
import  { ReactComponent as Alignment } from '../assets/img/alignment.svg';
import  { ReactComponent as BatteryService } from '../assets/img/batteryService.svg';
import  { ReactComponent as CheckEngine } from '../assets/img/checkEngine.svg';
import  { ReactComponent as Electrical } from '../assets/img/electrical.svg';
import  { ReactComponent as Maintenance } from '../assets/img/maintenance.svg';
import  { ReactComponent as NcInspection } from '../assets/img/ncInspection.svg';
import  { ReactComponent as OilChange } from '../assets/img/Oil_jug.svg';
import  { ReactComponent as DownArrow } from '../assets/img/Downarrow.svg';
import { useMediaQuery, useTheme } from '@mui/material'
import { Coupons } from './coupons';

export const Services = () => {
    const theme = useTheme();
    const useStyles = createUseStyles({
        servicesSection: {
            height: "auto",
            backgroundColor: "rgba(0, 0, 255, .8)",
        },
        servicesContainer: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 255, .8)",
        },
        downArrow: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "uppercase",
            color: "rgb(255,255,255)",
            fontFamily: "helvetica, arial, sans-serif",
            paddingBottom: "80px",
            fontSize: "19px",
            '& #down-arrow': {
                height: "30px",
                width: "30px",
                // padding: "10px",
                borderRadius: "50%",
                '&:hover': {
                    cursor: "pointer",
                }
            },
            [theme.breakpoints.down(550)]: {
                marginTop: "10px",
                fontSize: "17px",
                paddingBottom: "60px"
            },
            [theme.breakpoints.down(480)]: {
                marginTop: "30px",
                fontSize: "14px"
            },
        },
        servicesHeader: {
            marginTop: "100px",
            width: "100%",
            fontFamily: "'Chivo', sans-serif",
            fontSize: "54px",
            color: "rgb(255, 255, 255)",
            textAlign: "center",
            '& p': {
                textTransform: "uppercase",
                marginTop: 0,
                marginBottom: "-12px"
            },
            [theme.breakpoints.down(860)]: {
                marginTop: "40px"
            },
            [theme.breakpoints.down(700)]: {
                fontSize: "46px"
            },
            [theme.breakpoints.down(480)]: {
                marginTop: "0px",
                fontSize: "38px"
            }
        },
        servicesSubHeader: {
            paddingTop: "20px",
            width: "100%",
            fontFamily: "sans-serif",
            fontWeight: "lighter",
            fontSize: "2vh",
            color: "rgb(255, 255, 255)",
            textAlign: "center",
            '& p': {
                margin: 0
            },
            [theme.breakpoints.down(820)]: {
                fontSize: "18px"
            },
            [theme.breakpoints.down(480)]: {
                fontSize: "16px"
            }
        },
        servicesList: {
            marginTop: "70px",
            marginBottom: "90px",
            width: "90vw",
            height: "540px",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(400px, 1fr))",
            justifyContent: "space-around",
            [theme.breakpoints.down('1366')]: {
                gridTemplateColumns: "repeat(2, minmax(400px, 1fr))",
                rowGap: "30px",
                marginBottom: "150px"
            },
            [theme.breakpoints.down('1020')]: {
                height: "680px",
                gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
                rowGap: "60px",
                marginBottom: "70px"
            },
            [theme.breakpoints.down('680')]: {
                rowGap: "20px",
                height: "480px",
                marginBottom: "35px"
            },
            [theme.breakpoints.down('620')]: {
                gridTemplateColumns: "repeat(2, minmax(275px, 1fr))",
                height: "420px",
                marginBottom: "70px"
            },
            [theme.breakpoints.down('550')]: {
                marginTop: "30px",
                height: "350px",
                transform: "scale(.8)",
                marginBottom: "75px"
            },
            [theme.breakpoints.down('480')]: {
                marginTop: "10px",
                height: "260px",
                transform: "scale(.65)",
                marginBottom: "110px"
            }
        },
        serviceInfo: {
            display: "flex",
            justifyContent: "center",
            color: "rgb(255,255,255)",
            fontFamily: "helvetica, arial, sans-serif",
            [theme.breakpoints.down('1080')]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "60px"
            },
            [theme.breakpoints.down('680')]: {
                marginBottom: "40px",
            }
        },
        serviceTitle: { 
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "13px",
            marginBottom: "9px",
            [theme.breakpoints.down('1080')]: {
                fontSize: "18px",
                marginBottom: "18px",
                transform: "scale(1.1)"
            },
            [theme.breakpoints.down('680')]: {
                transform: "scale(1.2)",
                textAlign: "center",
                paddingTop: "5px",
                width: "200px"
            },
        },
        serviceContext: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100px",
            maxWidth: "250px",
            paddingLeft: "30px",
            [theme.breakpoints.down('1080')]: {
                display: "flex",
                alignItems: "center",
                padding: "0px",
                justifyContent: "space-between",
                transform: "scale(.9)"
            },
            // [theme.breakpoints.down("800")]: {
            //     justifyContent: "space-between"
            // }
        },
        serviceDescription: {
            marginTop: "0px",
            fontSize: "13px",
            [theme.breakpoints.down('1080')]: {
                textAlign: "center",
                fontSize: "22px",
            },
            [theme.breakpoints.down('680')]: {
                display: "none"
            }
        },
        serviceIcon: {
            height: "100px",
            width: "100px",
            [theme.breakpoints.down('1080')]: {
                height: "125px",
                width: "125px",
                marginBottom: "10px"
            },
            [theme.breakpoints.down('800')]: {
                height: "115px",
                width: "115px"
            },
            [theme.breakpoints.down('620')]: {
                height: "110px",
                width: "110px"
            },
            [theme.breakpoints.down('480')]: {
                height: "125px",
                width: "125px"
            }
        }
    })

    const classes = useStyles();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("1080"));
    const [serviceDisplaySet, setServiceDisplaySet] = useState(0);

    const switchServiceSet = () => {
        if(serviceDisplaySet === 1) {
            setServiceDisplaySet(0)
        } else {
            setServiceDisplaySet(serviceDisplaySet + 1);
        }
    }

    return (
        <section className={classes.servicesSection}>
            { 
                !isSmallScreen && 
                <div className={classes.servicesContainer}>
                    <Coupons />
                    <div className={classes.servicesHeader} id="services">
                        <p>our</p>
                        <p>services</p>
                    </div>
                    <div className={classes.servicesSubHeader}>
                        <p>Please call for all other services.</p>
                    </div>
                    <div className= {`${classes.servicesList}`}>
                        <div className={classes.serviceInfo}>
                            <AutoRepair className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>auto repairs</p>
                                <p className={classes.serviceDescription}>Your one stop shop for foreign and domestic auto repair in Fuquay.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <Maintenance className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>maintenance services</p>
                                <p className={classes.serviceDescription}>We make sure you keep up to date with your car's maintenance.</p>
                            </div> 
                        </div>
                        <div className={classes.serviceInfo}>
                            <NcInspection className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>nc inspection</p>
                                <p className={classes.serviceDescription}>Schedule a NC State Inspection for your car/truck.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <OilChange className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>oil change</p>
                                <p className={classes.serviceDescription}>For gasoline-powered passenger vehicles and light trucks, we recommend an oil change every 3,000 miles</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <AcRepair className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>a/c repairs</p>
                                <p className={classes.serviceDescription}>When NC gets hot or cold, your commute can get uncomfortable quickly unless the A/C & heating is in mint condition.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <BatteryService className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>battery service</p>
                                <p className={classes.serviceDescription}>Without a running battery in your vehicle, all you have is an expensive driveway ornament!</p>
                            </div> 
                        </div>
                        <div className={classes.serviceInfo}>
                            <CheckEngine className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>check engine light</p>
                                <p className={classes.serviceDescription}>We take 'check engine light' notices seriously. It's always a good idea to stop by and have your engine serviced.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <Electrical className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>electrical</p>
                                <p className={classes.serviceDescription}>No matter what kind of electrical issues you're having, the mechanics at All Pro can run diagnostics to help fix those issues.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <Alignment className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>wheel alignment</p>
                                <p className={classes.serviceDescription}>Principles for transformative solidarity practice, developed by Solidarity Is | Building Movement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                isSmallScreen &&
                <div className={classes.servicesContainer}>
                    <Coupons />
                    <div className={classes.servicesHeader} id="services">
                        <p>our</p>
                        <p>services</p>
                    </div>
                    <div className={classes.servicesSubHeader}>
                        <p>Please call for all other services.</p>
                    </div>
                    
                    <div className= {`${classes.servicesList}`}>

                    { 

                        serviceDisplaySet === 0 &&

                        <>
                        <div className={classes.serviceInfo}>
                            <AutoRepair className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>auto repairs</p>
                                <p className={classes.serviceDescription}>Your one stop shop for foreign and domestic auto repair in Fuquay.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <Maintenance className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>maintenance services</p>
                                <p className={classes.serviceDescription}>We make sure you keep up to date with your car's maintenance.</p>
                            </div> 
                        </div>
                        <div className={classes.serviceInfo}>
                            <NcInspection className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>nc inspection</p>
                                <p className={classes.serviceDescription}>Schedule a NC State Inspection for your car/truck.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <OilChange className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>oil change</p>
                                <p className={classes.serviceDescription}>For gasoline-powered passenger vehicles and light trucks, we recommend an oil change every 3,000 miles</p>
                            </div>
                        </div>
                        </>

                    }

                    {

                        serviceDisplaySet === 1 &&

                        <>
                        <div className={classes.serviceInfo}>
                            <AcRepair className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>a/c repairs</p>
                                <p className={classes.serviceDescription}>When NC gets hot or cold, your commute can get uncomfortable quickly unless the A/C & heating is in mint condition.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <BatteryService className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>battery service</p>
                                <p className={classes.serviceDescription}>Without a running battery in your vehicle, all you have is an expensive driveway ornament!</p>
                            </div> 
                        </div>
                        <div className={classes.serviceInfo}>
                            <CheckEngine className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>check engine light</p>
                                <p className={classes.serviceDescription}>We take 'check engine light' notices seriously. It's always a good idea to stop by and have your engine serviced.</p>
                            </div>
                        </div>
                        <div className={classes.serviceInfo}>
                            <Electrical className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>electrical</p>
                                <p className={classes.serviceDescription}>No matter what kind of electrical issues you're having, the mechanics at All Pro can run diagnostics to help fix those issues.</p>
                            </div>
                        </div>
                        </>

                    }
                    {/* {

                        serviceDisplaySet === 2 &&

                        <div className={classes.serviceInfo}>
                            <Alignment className={classes.serviceIcon}/>
                            <div className={classes.serviceContext}>
                                <p className={classes.serviceTitle}>wheel alignment</p>
                                <p className={classes.serviceDescription}>Principles for transformative solidarity practice, developed by Solidarity Is | Building Movement.</p>
                            </div>
                        </div>

                    } */}
                    </div>
                    <div className={classes.downArrow}>
                        <p>view more</p>
                        <DownArrow onClick={() => switchServiceSet()} />
                    </div>
                </div>
                
            }
        </section>
    )
}