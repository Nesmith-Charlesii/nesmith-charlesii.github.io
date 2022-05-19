import React, {useEffect, useRef, useState} from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Star } from '../assets/img/star.svg';
import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery, useTheme } from '@mui/material'
import { ReactComponent as LeftChevron } from '../assets/img/carousel_left_arrow.svg'
import { ReactComponent as RightChevron } from '../assets/img/carousel_right_arrow.svg'
import { v4 as uuid4 } from 'uuid'
import axios from 'axios';

export const Testimonial = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("1080"));
    const useStyles = createUseStyles({
        testimonialSection: {
            width: "100vw",
            backgroundColor: "rgb(255, 255, 255)",
            display: "flex",
            flexDirection: "column",
            aliginItems: "center",
            [theme.breakpoints.down("1080")]: {
                height: "auto"
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
                marginTop: "80px",
                padding: "0px 0px 0px 0px",
                '& #carousel-left': {
                    transform: "scale(4.2)",
                    // marginLeft: "120px",
                    position: "absolute",
                    top: "75px",
                    left: "55px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(50, 50, 50)",
                    boxSizing: "border-box",
                    paddingRight: "2px",
                    transition: "background-color 500ms",
                    '& path': {
                        stroke: "rgb(255, 255, 255)"
                    },
                    '&:hover': {
                        cursor: "pointer",
                        backgroundColor: "rgb(80, 80, 80)",
                    }
                },
                '& #carousel-right': {
                    transform: "scale(4.2)",
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
                        stroke: "rgb(255, 255, 255)"
                    },
                    '&:hover': {
                        cursor: "pointer",
                        backgroundColor: "rgb(80, 80, 80)",
                    }
                }
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
            fontStyle: "italic",
            marginBottom: "10px",
            [theme.breakpoints.down('1080')]: {
                textAlign: "right",
                fontSize: "17px",
                fontWeight: 500,
                fontStyle: "italic",
                marginTop: "-10px",
                maxWidth: "320px"
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
                textAlign: "left",
                height: "auto",
                fontStyle: "italic",
                fontSize: "16px",
            }
        },
        mobile_review: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginLeft: "142px"
        },
        author_profile_section: {
            marginRight: "100px",

        },
        carouselBtnGroup: {
            display: "flex"
        }
    })
    
    const classes = useStyles();
    const [reviewData, setReviewData] = useState([]);
    const [reviewIndex, setReviewIndex] = useState(0);
    const API_KEY = "AIzaSyBJENPgN53qEr85XVI_SPU3U8OsePGny0M";

    useEffect(() => {
        fetchReviews();
    }, [])

    const fetchReviews = async() => {
        try {
            let {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJm_YwkCaPrIkRyPiQzjalLPY&fields=reviews&key=${API_KEY}`);
            console.log("review dataset", data.result.reviews)
            setReviewData(data.result.reviews);
        }
        catch(error) {  
            console.log(error);
        }
    }

    const reviewStars = (number) => {
        return Array.from(new Array(number)).map(() => (
            <Star id="star"/>
        ))
    }

    const previousReview = () => {
        if(reviewIndex === 0) {
            setReviewIndex(reviewData.length - 1)
        } else {
        setReviewIndex(reviewIndex - 1);
        }
    }

    const nextReview = () => {
        if(reviewIndex === (reviewData.length - 1)) {
            setReviewIndex(0)
        } else {
        setReviewIndex(reviewIndex + 1)
        }
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
                    reviewData.map((review, index) =>  
                        <div className={classes.review} key={uuid4()}>
                            <div className={classes.author_name}>
                                <p>{review.author_name}</p>
                            </div>
                            <div className={classes.star_rating}>
                                <p>{reviewStars(review.rating)}</p>
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
                                <div className={classes.star_rating}>
                                    <p>{reviewData[reviewIndex]?.rating ? reviewStars(reviewData[reviewIndex]?.rating) : <CircularProgress/>}</p>
                                </div>
                                <div className={classes.review_text}>
                                    <p>{reviewData[reviewIndex]?.text ? reviewData[reviewIndex]?.text : <CircularProgress/>}</p>
                                </div>
                                <div className={classes.author_name}>
                                    <p>-  {reviewData[reviewIndex]?.author_name ? reviewData[reviewIndex]?.author_name : <CircularProgress/>}</p>
                                </div>
                            </div>
                        </div>
                        <LeftChevron onClick={() => previousReview()} />

                    </>
                }
            </div>
        </div>
    )
}