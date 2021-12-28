import React, {useEffect, useRef} from 'react';
import styles from "./ShareAsker.module.scss";
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";
import {Link, useNavigate} from "react-router-dom";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import ShareIcon from "../../components/UI/icons/ShareIcon";
import EditCreateBtn from "../../components/UI/icons/Create/EditCreateBtn";
import ContactLink from "../../components/UI/icons/Contact/ContactLink";
import LetterIcon from "../../components/UI/icons/LetterIcon";

const ShareAsker = (props) => {
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
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.cardWrap} ${styles.cardLeft}`}>
          <div className={`${styles.cardBg} ${styles.cardBgSide}`}>
            <div className={styles.cardContainer}>
            </div>
          </div>
        </div>
        <div ref={cardRef} className={`default-flip flip-card-inner ${styles.cardWrap}`}>
          <div className={`${styles.cardBg}`}>
            <div className={styles.cardContainer}>
              <div className={styles.logoBox}>
                <LetterIcon className={styles.letterIcon}/>
              </div>
              <div className={styles.titleBox}>
                <ShareIcon className={styles.shareLink}/>
                Share Asker
              </div>
              <div className={styles.text}>Invite people to answer using this Asker’s unique access code or via direct link:</div>

              <div className={styles.inputBox}>
                <div className={`${styles.inputBlock} `}>
                  <div className={styles.textBox}>
                    <input name={'name'} placeholder='VG6A8WH'/>
                  </div>
                  <div className={styles.linkIconWrap}>
                    <ContactLink className={styles.linkIcon}/>
                  </div>
                </div>
                <div className={`${styles.inputBlock} `}>
                  <div className={styles.textBox}>
                    <input name={'name'} placeholder='askerapp.com/VG6A8WH'/>
                  </div>
                  <div className={styles.linkIconWrap}>
                    <ContactLink className={styles.linkIcon}/>
                  </div>
                </div>
              </div>
              <div className={`button-box ${styles.buttonBox}`}>
                <button type="button" className={`continue-btn  ${styles.buttonStylePublich}`}>
                  <span>SHARE NOW</span>
                  <div className={styles.plusIconBox}>
                    <ShareIcon className={`${styles.shareIcon}`}/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rotate}>
            <div className="triangle-violet"/>
          </div>
        </div>
        <div className={`${styles.cardWrap} ${styles.cardRight}`}>
          <div className={`${styles.cardBg} ${styles.cardBgSide}`}>
            <div className={styles.cardContainer}>
            </div>
          </div>
        </div>

        {/*<div className={styles.rotate}>*/}
        {/*  <div className="triangle-3"/>*/}
        {/*</div>*/}
      </div>
    </div>
  )
};

export default ShareAsker;
