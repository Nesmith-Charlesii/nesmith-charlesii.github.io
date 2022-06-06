// import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Star } from '../../assets/img/star.svg';
import { useMediaQuery, useTheme } from '@mui/material';
import { v4 as uuid4 } from 'uuid'

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper';

export const Testimonial = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("1080"));
    const useStyles = createUseStyles({
        testimonialSection: {
            position: "relative",
            width: "100vw",
            height: "580px",
            backgroundColor: "rgb(255, 255, 255)",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down(700)]: {
                height: "515px"
            }
        },
        testimonialsHeader: {
            paddingTop: "70px",
            fontFamily: "'Chivo', sans-serif",
            fontSize: "54px",
            textAlign: "center",
            textTransform: "uppercase",
            '& p': {
                marginTop: 0,
                marginBottom: "-12px",
            },
            [theme.breakpoints.down(700)]: {
                fontSize: "46px"
            },
            [theme.breakpoints.down(480)]: {
                fontSize: "38px"
            }
        },
        review_group: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "90px 70px 110px 70px",
            [theme.breakpoints.down('1080')]: {
                marginTop: "75px",
                padding: "0px 0px 0px 0px",
                '& #carousel-left': {
                    transform: "scale(2.2)",
                    position: "absolute",
                    top: "75px",
                    left: "55px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(50, 50, 50)",
                    boxSizing: "border-box",
                    paddingRight: "2px",
                    transition: "background-color 500ms",
                    '& path': {
                        stroke: "rgb(255, 255, 255)",
                        [theme.breakpoints.down(750)]: {
                            stroke: "rgb(0, 0, 0)"
                        },
                    },
                    '&:hover': {
                        cursor: "pointer",
                        backgroundColor: "rgb(80, 80, 80)",
                    },
                    [theme.breakpoints.down(800)]: {
                        left: "30px",
                    },
                    [theme.breakpoints.down(750)]: {
                        backgroundColor: "white",
                    },
                    [theme.breakpoints.down(700)]: {
                        display: "none"
                    },
                },
                '& #carousel-right': {
                    transform: "scale(2.2)",
                    // marginRight: "120px",
                    position: "absolute",
                    top: "75px",
                    right: "70px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(50, 50, 50)",
                    boxSizing: "border-box",
                    paddingLeft: "2px",
                    transition: "background-color 500ms",
                    '& path': {
                        stroke: "rgb(255, 255, 255)",
                        [theme.breakpoints.down(750)]: {
                            stroke: "rgb(0, 0, 0)"
                        },
                    },
                    '&:hover': {
                        cursor: "pointer",
                        backgroundColor: "rgb(80, 80, 80)",
                    },
                    [theme.breakpoints.down(800)]: {
                        right: "55px",
                    },
                    [theme.breakpoints.down(750)]: {
                        backgroundColor: "white",
                    },
                    [theme.breakpoints.down(700)]: {
                        display: "none"
                    },
                }
            },
            [theme.breakpoints.down(700)]: {
                margin: "75px 70px -100px 70px"
            },
            [theme.breakpoints.down(420)]: {
                margin: "55px 70px -100px 70px"
            }
        },
        review: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "355px",
            marginRight: "28px",
        },
        author_image_border: {
            display: "flex",
            justifyContent: "center",
            border: "4px solid rgb(200, 200, 240)",
            borderRadius: "50%",
            padding: "15px",
        },
        author_image: {
            height: "17vh",
            width: "17vh",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
        },
        profile_image: {
            width: "100%",
            borderRadius: "50%"
        },
        author_name: {
            fontSize: "18px",
            fontFamily: "arial, helvetica, sans-serif",
            height: "50px",
            fontWeight: 600,
            // fontStyle: "italic",
            marginBottom: "10px",
            [theme.breakpoints.down('1080')]: {
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 600,
                fontStyle: "normal",
                marginTop: "-10px",
                marginBottom: "-15px"
            }
        },
        star_rating: {
            marginTop: "-15px",
            marginBottom: "-10px",
            transform: "scale(1)",
            '& #star': {
                marginRight: "8px",
                fill: "#FFD700",
                '& path': {
                    stroke: "rgb(130,130,130)",
                }
            },
            [theme.breakpoints.down('1080')]: {
                marginTop: "-26px",
                marginBottom: "-26px",
                transform: "scale(1.2)"
            }
        },
        review_text: {
            fontSize: "15.5px",
            fontFamily: "arial, helvetica, sans-serif",
            // fontStyle: "italic",
            height: "158px",
            maxWidth: "320px",
            padding: "0px 20px 0px 20px",
            display: "-webkit-box",
            lineClamp: 9,
            boxOrient: "vertical",
            overflowY: "clip",
            [theme.breakpoints.down("1080")]: {
                textAlign: "center",
                height: "auto",
                fontStyle: "normal",
                fontSize: "16px",
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 500,
                paddingBottom: "15px"
            }
        },
        mobile_review: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        author_profile_section: {
            marginRight: "100px",

        },
        carouselBtnGroup: {
            display: "flex"
        },
        carouselIndicators: {
            width: "100vw",
            visibility: "hidden",
            position: "absolute",
            bottom: "0px",
            justifyContent: "center",
            display: "flex",
            gap: "10px",
            paddingBottom: "50px",
            [theme.breakpoints.down(700)]: {
                visibility: "visible",
            },
            [theme.breakpoints.down(410)]: {
                top: "460px"
            }
        },
        carouselIndicatorDot: {
            height: "10px",
            width: "10px",
            border: "1.5px solid rgb(255, 99, 0)",
            borderRadius: "50%"
        },
        indicatorFill: {
            backgroundColor: "rgb(255, 99, 0)"
        },
    })
    
    const classes = useStyles();
    // const [reviewIndex, setReviewIndex] = useState(0);

    const savedReviewData = [
        {
            author_name: "Moris Campos",
            star_rating: 5,
            text: "Frank is an excellent mechanic! Staff is very polite and helpful."
        },
        {
            author_name: "vicki and Creppy",
            star_rating: 5,
            text: "This place is fantastic they do a great job their decently priced and their fast so call them what are you waiting for"
        },
        {
            author_name: "Jan Lomaz",
            star_rating: 5,
            text: "this is the best car-shop what I ever see...the profesional service..nice helpful and profesional people there..my car was fixed in couple minutes ...you cant go wrong with this car-shop ...high recomended"
        },
        {
            author_name: "James Allen",
            star_rating: 5,
            text: "Curtious, efficient, and very friendly. Very professional."
        },
        {
            author_name: "Cecilia Lopez",
            star_rating: 5,
            text: "I love this shop, I've been here four times and I was in and out... the rates are excellent. Se habla español which is a plus."
        },
    ]

    const reviewStars = (number) => {
        return Array.from(new Array(number)).map(() => (
            <Star id="star" key={uuid4()}/>
        ))
    }

    SwiperCore.use([Autoplay]);
    SwiperCore.use([Pagination]);

    return(
        <div id="testimonials" className={classes.testimonialSection}>
            <div className={classes.testimonialsHeader}>
                <p>Happy</p>
                <p>Customers</p>
            </div>
            <div className={classes.review_group}>

                {
                    !isSmallScreen &&
                    savedReviewData.map((review, index) =>  
                        <div className={classes.review} key={uuid4()}>
                            <div className={classes.author_name}>
                                <p>{review.author_name}</p>
                            </div>
                            <div className={classes.star_rating}>
                                <p>{reviewStars(review.star_rating)}</p>
                            </div>
                            <div className={classes.review_text}>
                                <p>{review.text}</p>
                            </div>
                        </div>
                    )
                }
                {
                    isSmallScreen &&
                    <>
                        <div className={classes.mobile_review}>
                            <Swiper 
                            pagination= {{
                                clickable: true,
                                dynamicBullets: true
                            }}
                            >
                                {
                                    savedReviewData.map(review =>
                                        <SwiperSlide>
                                            <div className={classes.mobile_review}>
                                                <div className={classes.review_section}>
                                                    <div className={classes.author_name}>
                                                        <p>{review.author_name}</p>
                                                    </div>
                                                    <div className={classes.star_rating}>
                                                        <p>{reviewStars(review.star_rating)}</p>
                                                    </div>
                                                    <div className={classes.review_text}>
                                                        <p>{review.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )

                                }
                            </Swiper>
                        </div>
                    


                        {/* <RightChevron  onClick={() => nextReview()} />
                        <div className={classes.mobile_review}>
                            <div className={classes.review_section}>
                                <div className={classes.author_name}>
                                    <p>{savedReviewData[reviewIndex]?.author_name ? savedReviewData[reviewIndex]?.author_name : <CircularProgress/>}</p>
                                </div>
                                <div className={classes.star_rating}>
                                    <p>{savedReviewData[reviewIndex]?.star_rating ? reviewStars(savedReviewData[reviewIndex]?.star_rating) : <CircularProgress/>}</p>
                                </div>
                                <div className={classes.review_text}>
                                    <p>{savedReviewData[reviewIndex]?.text ? savedReviewData[reviewIndex]?.text : <CircularProgress/>}</p>
                                </div>
                            </div>
                        </div>
                        <LeftChevron onClick={() => previousReview()} /> */}

                    </>
                }
            </div>

            {/* <div className={classes.carouselIndicators}>
                {
                    Array.from(new Array(5)).map((indicator, index) =>

                            reviewIndex === index ?

                            <div className={`${classes.carouselIndicatorDot} ${classes.indicatorFill}`} key={uuid4()}></div>
                            :
                            <div className={`${classes.carouselIndicatorDot} `} onClick={() => (selectReview(index))} key={uuid4()}></div>
                    )
                }
            </div> */}

        </div>
    )
}