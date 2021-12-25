import React from 'react';
import styles from './AllAnswers.module.scss'
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";

const AllAnswers = (props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,]

  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoBlock}>
        <AllAnswerIcon className={styles.infoIcon}/>
        <div className={styles.infoText}>Brighton Art Gallery<br/> Cleaner Job in Brighton</div>
      </div>
      <div className={styles.row}>
      {
        arr.map((item, index) => {
          return <div key={index} className={styles.cardWrap}>
            <div className={styles.answersContainer}>
              <div className={styles.answerCard}/>
            </div>
          </div>
        })
      }
      </div>
    </div>
  )
};

export default AllAnswers;
