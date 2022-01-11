import React, {useEffect, useRef, useState} from 'react';
import styles from "./CreateAsker.module.scss";
import QuestionSmall from "../../components/UI/icons/QuestionSmall";
import ClockIcon from "../../components/UI/icons/ClockIcon";
import AddQuestion from "../../components/UI/icons/AddQuestion";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import EditCreateBtn from "../../components/UI/icons/Create/EditCreateBtn";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import PlusIcon from "../../components/UI/icons/Create/PlusIcon";
import {http} from "../../http/http";

const CreateAskerTwo = (props) => {
  const [questions,setQuestions] = useState([]);
  const [activeQuestion,setActiveQuestion]=useState('');
  const elRef = useRef();
  const userID = localStorage.getItem('UserID')
  const bodyFormData = new FormData();
  bodyFormData.append('user_id', userID)
  bodyFormData.append('asker_id', props.activeAskerId)
  bodyFormData.append('question', activeQuestion)
  const handleContinue = () => {
    http.post('askerQuestion',bodyFormData)

  };

  const removeEffect = () => {
    handleContinue()
    elRef.current?.classList.add("ease-out-effect")
    const timer = setTimeout(() => {
      props.nextStep()
    }, 300);
    return timer;
  };


  const firstBlockQuestions = [
    'Tell me about your strengths & weaknesses',
    'Tell me about yourself in 30 seconds',
    'Tell me why you’re perfect for this role',
    'Tell me what makes you unique',
    'Tell me what you most enjoy about work'
  ]
  const secondBlockQuestions = [
    'Tell me about your relevant experience',
    'Tell me what makes you a great candidate',
    'Tell me where you see yourself in 5 years',
    'Tell me about a time you face adversity',
    'Tell me what you’d like to ask about the position'
  ]

  useEffect(()=>{
    http.post('questionList').then(res=>res.data).then(questionData=>setQuestions(questionData.question))

  },[])
  // const renderQuestionList = (text) => {
  //   re
  // }

  return (
    <div ref={elRef} className={` ease-in-effect ${styles.askerWrapper}`}>
      {/*<div className={styles.contantWrap}>*/}
      {/*<div className={`${styles.askerWrapper}`}>*/}
      <div className={`${styles.askerRow}`}>

        <div className={`${styles.askerCol} `}>
          <div className={`${styles.contantWrapTwo}`}>
            <div className={` ${styles.questionBlock}`}>
              <CreateAskerIcon className={styles.createLogo}/>
              <div className={styles.questionBox}>
                <div className={`${styles.questionItem} ${styles.questionItemSolid}`}>
                  <div className={styles.textBox}>
                    <label className={styles.title}>Who’s Asking?</label>
                    <input name={'name-3'} defaultValue={props.currentAsker.job_title} placeholder='e.g Recruitment Agency'/>
                    {/*<span className={styles.text}>e.g Recruitment Agency</span>*/}
                  </div>
                  <div className={styles.iconWrap}>
                    <EditCreateBtn className={styles.editIcon}/>
                  </div>
                </div>
                <div className={`${styles.questionItem} ${styles.questionItemSolid}`}>
                  <div className={styles.textBox}>
                    <label className={styles.title}>What’s it About?</label>
                    <input name={'name-4'} defaultValue={props.currentAsker.job_author} placeholder='e.g Questions for Candidates'/>
                    {/*<span className={styles.text}>e.g Questions for Candidates</span>*/}
                  </div>
                  <div className={styles.iconWrap}>
                    <EditCreateBtn className={styles.editIcon}/>
                  </div>
                </div>
              </div>
            </div>
              <div className={`${styles.questionItemEmpty}`}>
                <button type="button" className={styles.iconWrap} onClick={removeEffect}>
                  <PlusIcon className={styles.editIcon}/>
                </button>
                <div className={styles.activeQuestionText}>{activeQuestion}</div>
                <ClockIcon className={styles.iconClock}/>
              </div>

            <div className={`button-box ${styles.buttonBox}`}>
              <button type="button" className={`continue-btn ${styles.buttonStyle}`} onClick={removeEffect} disabled={activeQuestion === ''? true : false}>
                <span>PUBLISH ASKER</span>
                <ArrowBtn className={`arrow-btn ${styles.arrowTop}`}/>
              </button>
            </div>
            <div className={styles.rotate}>
              <div className="triangle-white"/>
            </div>
          </div>
        </div>

        <div className={`${styles.askerScrol} `}>
          <div className={`${styles.questionsWrap}`}>
            <div className={`${styles.questionsCol}`}>
              {
                questions.map((item, index) =>
                  <div key={index} className={styles.questionBoxList} onClick={()=>setActiveQuestion(item.question)}>
                    <QuestionSmall className={styles.questionIcon}/>
                    <div className={styles.questionText}>{item.question}</div>
                    <ClockIcon className={styles.clockIcon}/>
                  </div>
                )
              }
              <button type='button' className={styles.createBox} onClick={removeEffect}>
                <div className={styles.questionText}>CREATE QUESTION</div>
                <AddQuestion className={styles.addIcon}/>
              </button>
              {/*{*/}
              {/*  secondBlockQuestions.map((item, index) =>*/}
              {/*    <div key={index} className={styles.questionBoxList}>*/}
              {/*      <QuestionSmall className={styles.questionIcon}/>*/}
              {/*      <div className={styles.questionText}>{item}</div>*/}
              {/*      <ClockIcon className={styles.clockIcon}/>*/}
              {/*      /!*<ClockIcon className={styles.clockIcon}/>*!/*/}
              {/*    </div>*/}
              {/*  )*/}
              {/*}*/}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateAskerTwo;
