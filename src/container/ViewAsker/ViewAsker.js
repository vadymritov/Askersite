import React, {useEffect, useRef, useState} from 'react';
import styles from './ViewAsker.module.scss'
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import PlayIcon from "../../components/UI/icons/PlayIcon";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import CircleLi from "../../components/UI/icons/Contact/CircleLi";
import ClockIcon from "../../components/UI/icons/ClockIcon";
import {ReactComponent as GrayBg} from '../../image/svg/GrayBg.svg';
import {http} from "../../http/http";
import QuestionSmall from "../../components/UI/icons/QuestionSmall";
import Logo from "../../components/UI/icons/Logo";
import MenuBurgerIcon from "../../components/UI/icons/MenuBurgerIcon";

const ViewAsker = (props) => {
  let navigate = useNavigate();
  const location = useLocation();
  const [viewAsker, setViewAsker] = useState()
  const {asker_id, user_id} = location?.state;
  const [nextQuestionList, setNextQuestionList] = useState([]);
  const cardRef = useRef(null);


  console.log('location.state', location?.state, location?.state?.asker_id, asker_id, user_id)
  useEffect(async () => {
    if (cardRef?.current?.classList.contains("start-rotate")) {
      cardRef?.current?.classList.remove("start-rotate")
    }
    const timer = setTimeout(() => {
      cardRef?.current?.classList.add("start-rotate")
    }, 1);
    if (location?.state) {
      getNextQuestionList(asker_id, user_id);
      ViewAnswer(asker_id, user_id);
    }

    return () => clearTimeout(timer);
  }, [location]);

  const getNextQuestionList = async (asker_id, user_id) => {
    http.post('nextQuestionList', `user_id=${user_id}&asker_id=${asker_id}`)
      .then(resp => resp.data)
      .then((res) => {
        console.log('getNextQuestionLi', res);
        if (res.status === true) {
          setNextQuestionList(res?.question_list)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const ViewAnswer = async (asker_id, user_id) => {
    http.post('viewAnswers', `user_id=${user_id}&asker_id=${asker_id}`)
      .then(resp => resp.data)
      .then((res) => {
        console.log('ViewAns', res);
        if (res.status === true) {
          setViewAsker(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const showOption = (e) => {
    e.preventDefault();
    navigate(
      "/asker-option",
      {
        state: {
          asker_id: location?.state.asker_id,
          user_id: location?.state.user_id,
          viewAsker
        }
      })
  }

  const openViewAnswers = () => {
    navigate(
      "/watch-answer",
      {
        state: {
          asker_id: location?.state.asker_id,
          user_id: location?.state.user_id,
        }
      })
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
            <GrayBg className={styles.grayBg}/>
            <div className={styles.cardContainer}>
              {/*<div className={styles.menuWBox}>*/}
              <button type='button' className={styles.burgerBtn} onClick={(e) => showOption(e)}>
                <MenuBurgerIcon className={styles.burgerIcon}/>
              </button>
              {/*</div>*/}
              <div className={` ${styles.questionBlock}`}>
                <div className={styles.questionBox}>
                  <div className={`${styles.questionItem}`}>
                    <CreateAskerIcon className={styles.createLogo}/>
                    <div className={styles.textBox}>
                      <div className={styles.text}>{viewAsker?.asker_title}</div>
                      <div className={styles.title}>{viewAsker?.asker_author}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.infoBlock}`}>
                {
                  nextQuestionList?.map((item, index) =>
                    <div key={index} className={`${styles.infoItem}`}>
                      <div className={styles.circleBox}><CircleLi className={styles.point}/></div>
                      <div className={styles.textInfo}>{item?.title}</div>
                      <div className={styles.iconsBox}>
                        <ClockIcon className={styles.iconClock}/>
                        <span>{item?.time}s</span>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className={`button-box ${styles.buttonBox}`}>
                <button type="button" className={`continue-btn  ${styles.buttonStyle}`} onClick={openViewAnswers}>
                  <span>VIEW ANSWERS</span>
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

export default ViewAsker;
