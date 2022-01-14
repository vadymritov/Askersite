import React, {useState} from 'react';
import styles from './AllAnswers.module.scss'
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";
import {useNavigate} from "react-router-dom";
import {http} from "../../http/http";

const AllAnswers = (props) => {
  let navigate = useNavigate();
  const [arrAsker, setArrAsker] = useState([])
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,]
  const userID = JSON.parse(localStorage.getItem("UserID"));
  useState(()=>{
    http.post('allAsker', `user_id=${userID}`).then(resp => resp.data).then(askersData => setArrAsker(askersData.asker.slice(0,16)))
  },[])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoBlock}>
        <AllAnswerIcon className={styles.infoIcon}/>
        <div className={styles.infoText}>Brighton Art Gallery<br/> Cleaner Job in Brighton</div>
      </div>
      <div className={styles.row}>
      {
        arrAsker.map((item, index) => {
          return <div key={item.asker_id} onClick={()=>navigate('/watch-answer',{state:{
            asker_id:item.asker_id,
              user_id:userID
            }})} className={styles.cardWrap}>
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
