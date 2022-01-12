import React, {useEffect, useState} from 'react';
import styles from "./CarouselAnswerItem.module.scss";
import CircleContact from "../../../components/UI/icons/Contact/CircleContact";
import StarsLine from "../../../components/UI/icons/StarsLine";
import ContactName from "../../../components/UI/icons/Contact/ContactName";
import ContactLink from "../../../components/UI/icons/Contact/ContactLink";
import ContactEmail from "../../../components/UI/icons/Contact/ContactEmail";
import ContactPhone from "../../../components/UI/icons/Contact/ContactPhone";
import {useLocation} from "react-router-dom";
import {http} from "../../../http/http";
import AllAnswerIcon from "../../../components/UI/icons/AllAnswerIcon";
import Logo from "../../../components/UI/icons/Logo";
import {ReactComponent as LogoWhiteViolet} from '../../../image/svg/LogoWhateViolet.svg';
import {ReactComponent as StarIcon} from "../../../image/svg/StarIcon.svg";
import Slider from "react-slick";

const CarouselAnswerItem = ({state, item, data, ...props}) => {
    const [isActive, setActive] = useState(false);
    const location = useLocation();
    const {asker_id, user_id} = location?.state;
    const [userProfile, setUserProfile] = useState([]);
    const [askerData, setAskerData] = useState([]);
    const [answerData, setAnswerData] = useState([]);

    // const isActive = false
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 15000,
  };

    const onchange = (e, type) => {
      e.preventDefault()
      console.log('onCli', type);
      if (type === 'front') {
        setActive(false)
      } else {
        setActive(true)
      }

      // e.stopPropagation()
    }

    useEffect(() => {
      const user = localStorage.getItem("User");
      if (user) {
        setUserProfile(user);
      }

      // askerDeatils(asker_id, user_id);
      // answerList(asker_id, user_id);
    }, []);

    const askerDeatils = async (asker_id, user_id) => {
      http.post('viewAnswers', `user_id=${user_id}&asker_id=${asker_id}`)
        .then(res => res.data)
        .then((res) => {
          console.log('resOption', res, res.data.asker_detail[0]);
          setAskerData(res.data.asker_detail[0]);
        })
        .catch((err) => {
          console.log(err);
        })
    };

    const answerList = async (asker_id, user_id) => {
      http.post('answerList', `candidate_user_id=${user_id}&asker_id=${asker_id}`)
        .then(res => res.data)
        .then((res) => {
          console.log('answerList', res, res.answer_list);
          if (res.status === true) {
            setAnswerData(res.answer_list);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    };

  const submitRating = async (rating, question_id, answer_id) => {

    http.post('videoRating', `user_id=${user_id}&asker_id=${asker_id}&question_id=${question_id}&rating=${rating}&answer_id=${answer_id}`)
      .then(res => res.data)
      .then((res) => {
        console.log('submitRating', res, );
        answerList(asker_id, user_id)
        // if (res.status === true) {
        //   setAnswerData(res.answer_list);
        // }
      })
      .catch((err) => {
        console.log(err);
      })
  };

    console.log('CarouselAnswer', data, userProfile, item);

    return (
      <>
        <div className={styles.mainContainer}>
          <div className={`${styles.contentContainer}`}>
            <div className={`card card--front ${!isActive ? 'card--front--flip' : ''} ${styles.cardWrap}`} onClick={(e) => onchange(e, 'front')}>
              <div className={styles.cardContainer}>
                <div className={styles.logoBox}>
                  <div className={styles.infoBlockSmall}>
                    <AllAnswerIcon className={styles.infoIconSmall}/>
                    <div className={styles.infoTextSmall}>{data?.asker_title}<br/> <span className={styles.infoTextSmall__job}>{data?.asker_author}</span></div>
                  </div>
                  <LogoWhiteViolet className={styles.logo}/>
                </div>
                <div className="wth-ans-inner-slider promotionVideoSlide">
                  <Slider {...settings}>
                    {data?.answer_list?.length > 0
                      ? data?.answer_list.map((item) => (
                        <div className="wth-ans-inner-single-slide">
                          <div className={`img-vid ${styles.imgVideo}`}>
                            <video playsInline autoPlay muted loop>
                              <source src={item.answer} type="video/mp4"/>
                            </video>
                          </div>
                          <div className={`cont-watch ${styles.contentStar}`}>
                            <div className={`star-rate ${styles.starRate}`}>
                          <span
                            className={`material-icons ${
                              item.rating >= 1 ? "star-checked" : ""
                            }`}
                            id="star_r1"
                            onClick={() =>
                              submitRating(1, item.question_id, item.answer_id)
                            }
                          >
                            {item.rating >= 1 ? (
                              <StarIcon className={item.rating >= 1 ? styles.starIcon : styles.starIcon__fill}/>
                              // <img
                              //   alt=""
                              //   className="before"
                              //   src={star_white}
                              // />
                            ) : (
                              <StarIcon className={item.rating >= 1 ? styles.starIcon : styles.starIcon__fill}/>
                              // <img
                              //   alt=""
                              //   className="before"
                              //   src={star}
                              // />
                            )}
                          </span>
                          {/*    <span*/}
                          {/*      className={`material-icons ${*/}
                          {/*        item.rating >= 2 ? "star-checked" : ""*/}
                          {/*      }`}*/}
                          {/*      id="star_r2"*/}
                          {/*      onClick={() =>*/}
                          {/*        submitRating(2, item.question_id, item.answer_id)*/}
                          {/*      }*/}
                          {/*    >*/}
                          {/*  {item.rating >= 2 ? (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star_white}*/}
                          {/*    />*/}
                          {/*  ) : (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star}*/}
                          {/*    />*/}
                          {/*  )}*/}
                          {/*</span>*/}
                          {/*    <span*/}
                          {/*      className={`material-icons ${*/}
                          {/*        item.rating >= 3 ? "star-checked" : ""*/}
                          {/*      }`}*/}
                          {/*      id="star_r3"*/}
                          {/*      onClick={() =>*/}
                          {/*        submitRating(3, item.question_id, item.answer_id)*/}
                          {/*      }*/}
                          {/*    >*/}
                          {/*  {item.rating >= 3 ? (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star_white}*/}
                          {/*    />*/}
                          {/*  ) : (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star}*/}
                          {/*    />*/}
                          {/*  )}*/}
                          {/*</span>*/}
                          {/*    <span*/}
                          {/*      className={`material-icons ${*/}
                          {/*        item.rating >= 4 ? "star-checked" : ""*/}
                          {/*      }`}*/}
                          {/*      id="star_r4"*/}
                          {/*      onClick={() =>*/}
                          {/*        submitRating(4, item.question_id, item.answer_id)*/}
                          {/*      }*/}
                          {/*    >*/}
                          {/*  {item.rating >= 4 ? (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star_white}*/}
                          {/*    />*/}
                          {/*  ) : (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star}*/}
                          {/*    />*/}
                          {/*  )}*/}
                          {/*</span>*/}
                          {/*    <span*/}
                          {/*      className={`material-icons ${*/}
                          {/*        item.rating >= 5 ? "star-checked" : ""*/}
                          {/*      }`}*/}
                          {/*      id="star_r5"*/}
                          {/*      onClick={() =>*/}
                          {/*        submitRating(5, item.question_id, item.answer_id)*/}
                          {/*      }*/}
                          {/*    >*/}
                          {/*  {item.rating >= 5 ? (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star_white}*/}
                          {/*    />*/}
                          {/*  ) : (*/}
                          {/*    <img*/}
                          {/*      alt=""*/}
                          {/*      className="before"*/}
                          {/*      src={star}*/}
                          {/*    />*/}
                          {/*  )}*/}
                          {/*</span>*/}
                            </div>
                            <p>{item.question}</p>
                          </div>
                        </div>
                      ))
                      : null}
                  </Slider>
                </div>
              </div>
              {/*<div className={styles.rotate}>*/}
              {/*  <div className="triangle-violet"/>*/}
              {/*</div>*/}
            </div>
            {/*</div>*/}

            <div className={`card card--back ${!isActive ? 'card--back--flip' : ''} ${styles.cardWrapContact}`} onClick={(e) => onchange(e, 'back')}>
              <div className={styles.contentWrap}>
                <div className={styles.cardContainerContact}>
                  <div className={!isActive ? styles.blur : styles.blur__none}/>
                  <div className={styles.contentBox}>
                    <div className={styles.iconBox}>
                      <CircleContact className={styles.circleIcon}/>
                    </div>
                    <div className={styles.nameBox}>
                      <div className={styles.name}>Antonio Pérez</div>
                      <StarsLine className={styles.starsLine}/>
                    </div>
                    <div className={styles.infoBox}>
                      <div className={styles.infoLine}>
                        <ContactName className={styles.infoIcon}/>
                        <div className={styles.contactBlock}>
                          <span className={styles.titleInfo}>Name</span>
                          <span className={styles.textInfo}>Antonio Pérez</span>
                        </div>
                        <div className={styles.linkIconWrap}>
                          <ContactLink className={styles.linkIcon}/>
                        </div>
                      </div>
                      <div className={styles.infoLine}>
                        <ContactEmail className={styles.infoIcon}/>
                        <div className={styles.contactBlock}>
                          <span className={styles.titleInfo}>Email</span>
                          <span className={styles.textInfo}>antonio.p@gmail.com</span>
                        </div>
                        <div className={styles.linkIconWrap}>
                          <ContactLink className={styles.linkIcon}/>
                        </div>
                      </div>
                      <div className={styles.infoLine}>
                        <ContactPhone className={styles.infoIcon}/>
                        <div className={styles.contactBlock}>
                          <span className={styles.titleInfo}>Phone number</span>
                          <span className={styles.textInfo}>07432932937</span>
                        </div>
                        <div className={styles.linkIconWrap}>
                          <ContactLink className={styles.linkIcon}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className={styles.rotate}>*/}
            {/*  <div className="triangle-violet"/>*/}
            {/*</div>*/}
          </div>
          {/*<div className={styles.rotate}>*/}
          {/*  <div className="triangle-violet"/>*/}
          {/*</div>*/}
          {/*<div className="card-shadow"/>*/}
        </div>
      </>
    )
  }
;

export default CarouselAnswerItem;
