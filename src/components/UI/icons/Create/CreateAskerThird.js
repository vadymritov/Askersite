import React, {useEffect, useRef, useState} from 'react';
import styles from "../../../../container/CreateAsker/CreateAsker.module.scss";
import CreateAskerIcon from "./CreateAskerIcon";
import EditCreateBtn from "./EditCreateBtn";
import CheckIcon from "./CheckIcon";
import PlusIcon from "./PlusIcon";
import ClockIcon from "../ClockIcon";
import ArrowBtn from "../ArrowBtn";
import {useNavigate} from "react-router-dom";

const CreateAskerThird = (props) => {
  const elRef = useRef();
  let navigate = useNavigate();
  const [timer, setTimer] = useState()


  const showContact = () => {
    navigate('/contact-card')
  }


  const removeEffect = () => {
    elRef.current?.classList.add("ease-out-effect")
    const timer = setTimeout(() => {
      navigate('/share-asker')
    }, 300);
    return timer;
  };

  return (
    <div ref={elRef} className={`ease-in-effect  ${styles.createContainer}`}>
      <div className={styles.contantWrap}>
        <div className={` ${styles.questionBlock}`}>
          <CreateAskerIcon className={styles.createLogo}/>
          <div className={styles.questionBox}>
            <div className={`${styles.questionItem} ${styles.questionItemSolid}`}>
              <div className={styles.textBox}>
                <span className={styles.title}>Brighton Art Gallery</span>
                {/*<span className={styles.text}>e.g Recruitment Agency</span>*/}
              </div>
              <div className={`${styles.iconWrap}`}>
                <EditCreateBtn className={styles.editIcon}/>
              </div>
            </div>
            <div className={`${styles.questionItem} ${styles.questionItemSolid}`}>
              <div className={styles.textBox}>
                <span className={styles.title}>Cleaner Job in Brighton Required immediately</span>
                {/*<span className={styles.text}>e.g Recruitment Agency</span>*/}
              </div>
              <div className={`${styles.iconWrap}`}>
                <EditCreateBtn className={styles.editIcon}/>
              </div>
            </div>

          </div>
        </div>
        <div className={`${styles.questionItem} ${styles.questionItemDash}`}>
          <div className={`${styles.iconWrap} ${styles.iconWrapCheck}`}>
            <CheckIcon className={styles.checkIcon}/>
          </div>
          <div className={styles.textBox}>
            <label className={styles.title}>What’s it About?</label>
            <input name={'name-4'} placeholder='e.g Questions for Candidates'/>
            {/*<span className={styles.text}>e.g Questions for Candidates</span>*/}
          </div>
          <div className={styles.timesBox}>
            <span>30s</span>
            <span className={styles.active}>60s</span>
            <span>90s</span>
          </div>
        </div>
        <div className={`${styles.questionItemEmpty}`}>
          <button type="button" className={styles.iconWrap} onClick={removeEffect}>
            <PlusIcon className={styles.editIcon}/>
          </button>
          <ClockIcon className={styles.iconClock}/>
        </div>
        <div className={`button-box ${styles.buttonBox}`}>
          <button type="button" className={`continue-btn  ${styles.buttonStylePublich}`} onClick={removeEffect}>
            <span>PUBLISH ASKER</span>
            <ArrowBtn className={`arrow-btn ${styles.arrowTopGreen}`}/>
          </button>
        </div>
        <div className={styles.rotate}>
          <div className="triangle-white"/>
        </div>
      </div>
    </div>
  )
};

export default CreateAskerThird;
