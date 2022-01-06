import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./NextQuestion.module.scss";
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import CircleLi from "../../components/UI/icons/Contact/CircleLi";
import ClockIcon from "../../components/UI/icons/ClockIcon";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import CheckIcon from "../../components/UI/icons/Create/CheckIcon";
import ReloadIcon from "../../components/UI/icons/ReloadIcon";
import CheckNextIcon from "../../components/UI/icons/CheckNextIcon";
import {ReactComponent as GrayBg} from '../../image/svg/GrayBg.svg';

const NextQuestion = (props) => {
  const cardRef = useRef(null);
  let navigate = useNavigate();
  const [search, setSearch] = useState("");

  const hendaleingFormSubmit = async () => {
    // var parameter =
    //   "&asker_code=" +
    //   encodeURIComponent(Search) +
    //   "&user_id=" +
    //   encodeURIComponent(UserProfile.id);
    //
    // await fetch(SITEURL.FULLBASE_API + "askerCode", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    //   body: parameter,
    // })
    //   .then((resp) => resp.json())
    //   .then((respJson) => {
    //     if (respJson.status === true) {
    //       history.push({ pathname: "/SatrtAnswer", state: respJson });
    //     }
    //   });
  };

  useEffect(async () => {
    if (cardRef?.current?.classList.contains("start-rotate")) {
      console.log('true');
      cardRef?.current?.classList.remove("start-rotate")
    }

    const timer = setTimeout(() => {
      cardRef?.current?.classList.add("start-rotate")
    }, 1);

    return () => clearTimeout(timer);
  }, [props]);

  const showViewAnswer = () => {
    console.log('onc');
    navigate('/watch-answer')
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoBlockHead}>
        <AllAnswerIcon className={styles.infoIcon}/>
        <div className={styles.infoText}>
          <span className={styles.smallText}>Brighton Art Gallery</span> Cleaner Job in Brighton</div>
      </div>


      <div className={`${styles.contentContainer}`}>
        <div ref={cardRef} className={`default-flip flip-card-inner ${styles.cardWrap}`}>
          <div className={`${styles.cardBg}`}>
            <GrayBg className={styles.grayBg}/>
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
                  <div className={styles.circleBox}>
                    <CheckNextIcon className={styles.checkIcon}/></div>
                  <div className={styles.textInfo}>What are your strengths and weaknesses?</div>
                  <div className={styles.iconsBox}>
                    <ReloadIcon className={styles.iconReload}/>
                  </div>
                </div>
                <div className={`${styles.infoItem}`}>
                  <div className={styles.circleBox}>
                    <CheckNextIcon className={styles.checkIcon}/></div>
                  <div className={styles.textInfo}>What’s your idea of the perfect flatmate?</div>
                  <div className={styles.iconsBox}>
                    <ReloadIcon className={styles.iconReload}/>
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
                  <span>NEXT QUESTION</span>
                  <div className={styles.plusIconBox}>
                    <ArrowBtn className={`${styles.shareIcon}`}/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rotate}>
            <div className="triangle-white"/>
          </div>
        </div>
      </div>
    </div>
  )
  };

export default NextQuestion;
