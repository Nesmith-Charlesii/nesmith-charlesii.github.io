import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Star } from '../assets/img/star.svg';
import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery, useTheme } from '@mui/material'
import { ReactComponent as LeftChevron } from '../assets/img/carousel_left_arrow.svg'
import { ReactComponent as RightChevron } from '../assets/img/carousel_right_arrow.svg'
import { v4 as uuid4 } from 'uuid'
// import axios from 'axios';

export const Testimonial = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("1080"));
    const useStyles = createUseStyles({
        testimonialSection: {
            position: "relative",
            width: "100vw",
            backgroundColor: "rgb(255, 255, 255)",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down("1080")]: {
                height: "62vh"
            },
            [theme.breakpoints.down(700)]: {
                height: "70vh"
            },
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
            fontStyle: "italic",
            marginBottom: "10px",
            [theme.breakpoints.down('1080')]: {
                textAlign: "center",
                fontSize: "18px",
                fontWeight: 600,
                fontStyle: "italic",
                marginTop: "-10px",
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
                transform: "scale(1.2)"
            }
        },
        review_text: {
            fontSize: "14px",
            fontFamily: "arial, helvetica, sans-serif",
            fontStyle: "italic",
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
            bottom: "114px",
            justifyContent: "center",
            display: "flex",
            gap: "10px",
            [theme.breakpoints.down(700)]: {
                visibility: "visible",
            },
            [theme.breakpoints.down(410)]: {
                bottom: "75px"
            }
        },
        carouselIndicatorDot: {
            height: "15px",
            width: "15px",
            border: "1.5px solid rgb(255, 99, 0)",
            borderRadius: "50%"
        },
        indicatorFill: {
            backgroundColor: "rgb(255, 99, 0)"
        }
    })
    
    const classes = useStyles();
    // const [reviewData, setReviewData] = useState([]);
    const [reviewIndex, setReviewIndex] = useState(0);
    // const API_KEY = "AIzaSyBJENPgN53qEr85XVI_SPU3U8OsePGny0M";

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

    // useEffect(() => {
    //     fetchReviews();
    // }, [])

    // const fetchReviews = async() => {
    //     try {
    //         let {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJm_YwkCaPrIkRyPiQzjalLPY&fields=reviews&key=${API_KEY}`);
    //         console.log("review dataset", data.result.reviews)
    //         setReviewData(data.result.reviews);
    //     }
    //     catch(error) {  
    //         console.log(error);
            
    //     }
    // }

    const reviewStars = (number) => {
        return Array.from(new Array(number)).map(() => (
            <Star id="star" key={uuid4()}/>
        ))
    }

    const previousReview = () => {
        if(reviewIndex === 0) {
            setReviewIndex(savedReviewData.length - 1)
        } else {
        setReviewIndex(reviewIndex - 1);
        }
    }

    const nextReview = () => {
        if(reviewIndex === (savedReviewData.length - 1)) {
            setReviewIndex(0)
        } else {
            setReviewIndex(reviewIndex + 1)
        }
    }

    const selectReview = (index) => {
        setReviewIndex(index);
    }

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
                    
                        <RightChevron  onClick={() => nextReview()} />
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
                        <LeftChevron onClick={() => previousReview()} />

                    </>
                }
            </div>
            <div className={classes.carouselIndicators}>
                {
                    Array.from(new Array(5)).map((indicator, index) =>

                            reviewIndex === index ?

                            <div className={`${classes.carouselIndicatorDot} ${classes.indicatorFill}`} key={uuid4()}></div>
                            :
                            <div className={`${classes.carouselIndicatorDot} `} onClick={() => (selectReview(index))} key={uuid4()}></div>
                    )
                }
            </div>
        </div>
    )
}