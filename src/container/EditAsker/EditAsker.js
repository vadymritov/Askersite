import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./EditAsker.module.scss";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import ClockIcon from "../../components/UI/icons/ClockIcon";
import EditCreateBtn from "../../components/UI/icons/Create/EditCreateBtn";
import CheckIcon from "../../components/UI/icons/Create/CheckIcon";

const EditAsker = (props) => {
  const [editField, setEditField] = useState(null)
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

  const handleEdit = (e, type) => {
    // if (type === 'name') {
    setEditField(type)
    // }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.cardWrap} ${styles.cardLeft}`}>
          <div className={`${styles.cardBg} `}>
            <div className={` ${styles.cardBgSide}`}>
              <div className={styles.cardContainer}/>
            </div>
          </div>
        </div>

        <div ref={cardRef} className={`default-flip flip-card-inner ${styles.cardWrap}`}>
          <div className={`${styles.cardBg}`}>
            <div className={styles.cardContainer}>
              <div className={` ${styles.questionBlock}`}>
                <CreateAskerIcon className={styles.createLogo}/>
                <div className={styles.questionBox}>
                  <div className={`${styles.questionItem} ${editField === 'name' ? styles.questionItemSolid : ''}`}>
                    <div className={styles.textBox}>
                      {editField == null || editField === 'job' ?
                        <div className={styles.titleSmall}>Brighton Art Gallery</div> :
                        <input name={'name'} placeholder=''/>
                      }
                    </div>
                    <button type='button' className={`${styles.iconWrap}`} onClick={(e) => handleEdit(e, 'name')}>
                      <EditCreateBtn className={styles.editIcon}/>
                    </button>
                  </div>
                  <div className={`${styles.questionItem} ${editField === 'job' ? styles.questionItemSolid : ''}`}>
                    <div className={styles.textBox}>
                      {editField == null || editField === 'name' ?
                        <div className={styles.title}>Cleaner Job in Central Brighton</div> :
                        <input name={'name'} placeholder=''/>
                      }
                    </div>
                    <button type='button' className={`${styles.iconWrap}`} onClick={(e) => handleEdit(e, 'job')}>
                      <EditCreateBtn className={styles.editIcon}/>
                    </button>
                  </div>

                </div>
              </div>

              <div className={styles.contentBlock}>
                <div className={`${styles.questionItemEmpty}`}>
                  <button type="button" className={styles.iconWrap}>
                    <EditCreateBtn className={styles.editIcon}/>
                  </button>
                  <div className={styles.textEdit}>Tell me about yourself</div>
                  <div className={styles.iconsBox}>
                    <ClockIcon className={styles.iconClock}/>
                    <span>30s</span>
                  </div>
                </div>
              </div>
              <div className={styles.contentBlock}>
                <div className={`${styles.questionItemEmpty}`}>
                  <button type="button" className={styles.iconWrap}>
                    <EditCreateBtn className={styles.editIcon}/>
                  </button>
                  <div className={styles.textEdit}>Tell me about your strengths and weaknesses</div>
                  <div className={styles.iconsBox}>
                    <ClockIcon className={styles.iconClock}/>
                    <span>30s</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.questionItem} ${styles.questionItemDash}`}>
                <div className={`${styles.iconWrap} ${styles.iconWrapCheck}`}>
                  <CheckIcon className={styles.checkIcon}/>
                </div>
                <div className={styles.textBox}>
                  <div className={styles.textEdit}>Tell me what you’d like to know about this role</div>
                  {/*<input name={'name-4'} placeholder='e.g Questions for Candidates'/>*/}
                  {/*<span className={styles.text}>e.g Questions for Candidates</span>*/}
                </div>
                <div className={styles.timesBox}>
                  <span>30s</span>
                  <span className={styles.active}>60s</span>
                  <span>90s</span>
                </div>
              </div>

              <div className={`button-box ${styles.buttonBox}`}>
                <button type="button" className={`continue-btn  ${styles.buttonStylePublich}`} >
                  <span>SAVE CHANGES</span>
                  <div className={styles.plusIconBox}>
                    <CheckIcon className={`${styles.shareIcon}`}/>
                  </div>
                </button>
              </div>
              {/*<div className={styles.rotate}>*/}
              {/*  <div className="triangle-white"/>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={styles.rotate}>
            <div className="triangle-white"/>
          </div>
        </div>

        <div className={`${styles.cardWrap} ${styles.cardRight}`}>
          <div className={`${styles.cardBg} `}>
            <div className={` ${styles.cardBgSide}`}>
              <div className={styles.cardContainer}/>
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

export default EditAsker;
