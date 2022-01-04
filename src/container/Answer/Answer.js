import styles from "./Answer.module.scss";
// import AllAnswerIcon from "../UI/icons/AllAnswerIcon";
import React, {useEffect, useRef, useState} from "react";
import Loader from "./Loader/Loader";
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";
import {useNavigate} from "react-router-dom";
import Logo from "../../components/UI/icons/Logo";


const Answer = (props) => {
  const [loaderActive, setLoaderActive] = useState(false);
  const [finishAnswer, setFinishAnswer] = useState(false);

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

  const beginAnswer = () => {
    setLoaderActive(true);
    setTimeout(() => setFinishAnswer(true), 3)
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoBlock}>
        <AllAnswerIcon className={styles.infoIcon}/>
        <div className={styles.infoText}>Brighton Art Gallery<br/> Cleaner Job in Brighton</div>
      </div>
      <div className={`${styles.contentContainer}`}>
        <div ref={cardRef} className={`default-flip flip-card-inner  ${styles.cardWrap}`} >
          <Logo className={styles.logo}/>
          <Loader className={styles.loader} isActive={loaderActive} setIsActive={setLoaderActive}/>
          <div className={styles.cardInfo}>
            <span>Tell me what you’d like to know about this role?</span>
            {!finishAnswer  ? <button className={`${styles.beginBtn} `} onClick={() => {beginAnswer()}}>
                begin answer
                {/*{loaderActive ? 'finish answer' : 'begin answer'}*/}
                <div/>
              </button>
              :
              <div className={styles.content}>
                <span>finish answer</span>

                <div className={styles.redCircleWrap}>
                <div className={styles.timer}>
                  35
                </div>
                </div>
                <div className={styles.line}/>
              </div>
            }

            {/*<div className={`${styles.geeksk} ${loaderActive ? styles.beginBtnFinish : styles.geeks}`}/>*/}
            {/*</div>*/}
          </div>
          <div className={styles.cardContainer}>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Answer;
