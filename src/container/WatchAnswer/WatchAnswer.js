import React, {useEffect, useRef} from 'react';
import styles from "./WatchAnswer.module.scss";
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";
import {useNavigate} from "react-router-dom";
import {Carousel} from "react-bootstrap";
// import { Carousel } from 'react-responsive-carousel';
// import Slider from 'react-touch-drag-slider'


const WatchAnswer = (props) => {
    let navigate = useNavigate();
    const cardRef = useRef(null);

    useEffect(async () => {

      if (cardRef?.current?.classList.contains("start-rotate")) {
        cardRef?.current?.classList.remove("start-rotate")
      }

      const timer = setTimeout(() => {
        cardRef?.current?.classList.add("start-rotate")
      }, 1);

      return () => clearTimeout(timer);
    }, [props]);

    const showContact = () => {
      navigate('/contact-card')
    }

    const images = [1, 2, 3,]

    return (
      <div className={styles.mainContainer}>
        <div className={styles.infoBlock}>
          <AllAnswerIcon className={styles.infoIcon}/>
          <div className={styles.infoText}>Brighton Art Gallery<br/> Cleaner Job in Brighton</div>
        </div>
        <div className={`${styles.contentContainer}`}>


          {/*<Carousel*/}
          {/*  // activeIndex={0}*/}
          {/*  indicators={false}*/}
          {/*  prevLabel={null}*/}
          {/*  nextLabel={null}*/}
          {/*  // controls={false}*/}
          {/*  // wrap={false}*/}
          {/*>*/}
          {/*  {images.map((item, index) => (*/}
          {/*    <Carousel.Item>*/}
          {/*      <div ref={cardRef} key={index} className={`default-flip flip-card-inner ${styles.cardWrap}`}>*/}
          {/*        <div className={styles.cardContainer}>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </Carousel.Item>*/}
          {/*  ))}*/}

          {/*</Carousel>*/}

          <div className={`${styles.cardWrap} ${styles.cardLeft}`}>
            <div className={styles.cardContainer}>
            </div>
          </div>
          {/*<div className={styles.contentWrapLogin }>*/}
          {/*</div>*/}
          <div ref={cardRef} className={`default-flip flip-card-inner ${styles.cardWrap}`} onClick={showContact}>
            <div className={styles.cardContainer}>
            </div>
          </div>
          <div className={`${styles.cardWrap} ${styles.cardRight}`}>
            <div className={styles.cardContainer}>
            </div>
          </div>

        </div>
      </div>
      // </div>
    )
  }
;

export default WatchAnswer;
