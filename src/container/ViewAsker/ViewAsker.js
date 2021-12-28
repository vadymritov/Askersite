import React, {useEffect, useRef} from 'react';
import styles from './ViewAsker.module.scss'
import {useNavigate} from "react-router-dom";
import LetterIcon from "../../components/UI/icons/LetterIcon";
import ShareIcon from "../../components/UI/icons/ShareIcon";
import ContactLink from "../../components/UI/icons/Contact/ContactLink";
import PlayIcon from "../../components/UI/icons/PlayIcon";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import EditCreateBtn from "../../components/UI/icons/Create/EditCreateBtn";
import CheckIcon from "../../components/UI/icons/Create/CheckIcon";
import CircleLi from "../../components/UI/icons/Contact/CircleLi";
import ClockIcon from "../../components/UI/icons/ClockIcon";

const ViewAsker = (props) => {
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
              <div className={` ${styles.questionBlock}`}>
                <div className={styles.questionBox}>
                  <div className={`${styles.questionItem}`}>
                    <CreateAskerIcon className={styles.createLogo}/>
                    <div className={styles.textBox}>
                      <div className={styles.text}>Brighton Art Gallery</div>
                      <div className={styles.title}>Cleaner job in Brighton</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.infoBlock}`}>
                <div className={`${styles.infoItem}`}>
                  <div className={styles.circleBox}><CircleLi className={styles.point}/></div>
                  <div className={styles.textInfo}>What are your strengths and weaknesses?</div>
                  <div className={styles.iconsBox}>
                    <ClockIcon className={styles.iconClock}/>
                    <span>30s</span>
                  </div>
                </div>
                <div className={`${styles.infoItem}`}>
                  <div className={styles.circleBox}><CircleLi className={styles.point}/></div>
                  <div className={styles.textInfo}>What’s your idea of the perfect flatmate?</div>
                  <div className={styles.iconsBox}>
                    <ClockIcon className={styles.iconClock}/>
                    <span>30s</span>
                  </div>
                </div>
                <div className={`${styles.infoItem}`}>
                  <div className={styles.circleBox}><CircleLi className={styles.point}/></div>
                  <div className={styles.textInfo}>Tell me what makes you perfect for this role</div>
                  <div className={styles.iconsBox}>
                    <ClockIcon className={styles.iconClock}/>
                    <span>30s</span>
                  </div>
                </div>
              </div>
            <div className={`button-box ${styles.buttonBox}`}>
              <button type="button" className={`continue-btn  ${styles.buttonStyle}`}>
                <span>VIEW ANSWERS </span>
                <div className={styles.plusIconBox}>
                  <PlayIcon className={`${styles.shareIcon}`}/>
                </div>
              </button>
            </div>
            </div>
          </div>
          <div className={styles.rotate}>
            <div className="triangle-white"/>
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

export default ViewAsker;
