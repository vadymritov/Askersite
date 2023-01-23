import React, { useEffect, useState } from "react";
import styles from "./ViewAsker.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { http } from "../../http/http";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";

const ViewAsker = (props) => {
  const location = useLocation();
  const [viewAsker, setViewAsker] = useState();
  // const {asker_id, user_id} = location?.state;
  const [nextQuestionList, setNextQuestionList] = useState([]);
  // const cardRef = useRef(null);
  const [allAskers, setAllAskers] = useState([]);
  const images = [1, 2, 3, 4, 5];

  const asker_id = 1;
  const user_id = 1;

  useEffect(() => {
    setAllAskers([
      {
        question_id: 1,
        question: "What's this ?",
        answer_id: 1,
        answer: "This is Asker",
        rating: 5,
      },
      {
        question_id: 2,
        question: "What's this ?",
        answer_id: 2,
        answer: "This is Asker",
        rating: 2,
      },
      {
        question_id: 3,
        question: "What's this ?",
        answer_id: 3,
        answer: "This is Asker",
        rating: 4,
      },
      {
        question_id: 4,
        question: "What's this ?",
        answer_id: 4,
        answer: "This is Asker",
        rating: 1,
      },
      {
        question_id: 5,
        question: "What's this ?",
        answer_id: 5,
        answer: "This is Asker",
        rating: 3,
      },
      {
        question_id: 6,
        question: "What's this ?",
        answer_id: 6,
        answer: "This is Asker",
        rating: 4,
      },
    ]);
    /*     http
      .post("archivedAsker", `user_id=${localStorage.getItem("UserID")}`)
      // http.post('allAsker', `user_id=${localStorage.getItem("UserID")}`)
      .then((resp) => resp.data)
      .then((res) => {
        console.log("res", res, res.asker);
        if (res.status === true) {
          setAllAskers(res.asker);
        }
      });
 */
  }, []);

  useEffect(async () => {
    ViewAnswer(asker_id, user_id);
    getNextQuestionList(asker_id, user_id);
    // if (location?.state) {
    //   getNextQuestionList(asker_id, user_id);
    //   ViewAnswer(asker_id, user_id);
    // }

    // return () => clearTimeout(timer);
  }, [location]);

  const getNextQuestionList = async (asker_id, user_id) => {
    // http
    //   .post("nextQuestionList", `user_id=${user_id}&asker_id=${asker_id}`)
    //   .then((resp) => resp.data)
    //   .then((res) => {
    //     console.log("getNextQuestionLi", res);
    //     if (res.status === true) {
    //       setNextQuestionList(res?.question_list);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setNextQuestionList([]);
  };

  const ViewAnswer = async (asker_id, user_id) => {
    setViewAsker({
      asker_id: asker_id,
      asker_code: "001",
    });

    // http
    //   .post("viewAnswers", `user_id=${user_id}&asker_id=${asker_id}`)
    //   .then((resp) => resp.data)
    //   .then((res) => {
    //     console.log("ViewAns", res);
    //     if (res.status === true) {
    //       setViewAsker(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.contentContainer}`}>
        <CustomCarousel
          data={allAskers}
          autoPlay={false}
          state={location?.state}
          interval={5000}
          nextQuestionList={nextQuestionList}
          viewAsker={viewAsker}
          // type={'watchAnswer'}
          type={"viewAsker"}
        />
      </div>
    </div>
  );
};

export default ViewAsker;
