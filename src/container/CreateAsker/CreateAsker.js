import React, {useEffect, useRef} from 'react';
import styles from './CreateAsker.module.scss'
import {useNavigate} from "react-router-dom";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import EditCreateBtn from "../../components/UI/icons/Create/EditCreateBtn";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import LinePhone from "../../components/UI/icons/LinePhone";

const CreateAsker = (props) => {
    const elRef = useRef();
    let navigate = useNavigate()

    const handleContinue = () => {
      // request axios

    };

    const removeEffect = () => {
      elRef.current?.classList.add("ease-out-effect")
      const timer = setTimeout(() => {
        handleContinue();
      }, 1200);
      return timer;
    };

  const onSendData = (data) => {
    // console.log('onSendDat', data);
    // props.nextStep(data)
  };


    return (
      <div ref={elRef} className={` ease-in-effect ${styles.createContainer}`}>
        <div className={styles.contantWrap}>
          <div className={` ${styles.questionBlock}`}>
            <CreateAskerIcon className={styles.createLogo}/>
            <div className={styles.questionBox}>
              <div className={`${styles.questionItem} ${styles.questionItemSolid}`}>
                <div className={styles.textBox}>
                  <span className={styles.title}>Who’s Asking?</span>
                  <span className={styles.text}>e.g Recruitment Agency</span>
                </div>
                <div className={styles.iconWrap}>
                  <EditCreateBtn className={styles.editIcon}/>
                </div>
              </div>

              <div className={`${styles.questionItem} ${styles.questionItemDash}`}>
                <div className={styles.textBox}>
                  <span className={styles.title}>What’s it About?</span>
                  <span className={styles.text}>e.g Questions for Candidates</span>
                </div>
                <div className={styles.iconWrap}>
                  <EditCreateBtn className={styles.editIcon}/>
                </div>
              </div>
            </div>
          </div>
            <div className={`button-box ${styles.buttonBox}`}>
              <button type="button" className={`continue-btn`} onClick={onSendData}>
                <span>Continue</span>
                <ArrowBtn className={`arrow-btn `}/>
              </button>
            </div>
          <div className={styles.rotate}>
            <div className="triangle-2"/>
          </div>
        </div>
      </div>
    )
  }
;

export default CreateAsker;
