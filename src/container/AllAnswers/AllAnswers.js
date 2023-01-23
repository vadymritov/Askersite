import React, { useEffect, useState } from "react";
import styles from "./AllAnswers.module.scss";
import AllAnswerIcon from "../../components/UI/icons/AllAnswerIcon";
import { useNavigate } from "react-router-dom";
import { http } from "../../http/http";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Scrollbars } from "react-custom-scrollbars";
import Search from "../../components/UI/icons/Search";
import SettingIcon from "../../components/UI/icons/SettingIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AllAnswers = (props) => {
  let navigate = useNavigate();
  // const [arrAsker, setArrAsker] = useState([]);

  const arrAsker = [
    { asker_id: 1 },
    { asker_id: 2 },
    { asker_id: 3 },
    { asker_id: 4 },
    { asker_id: 5 },
    { asker_id: 6 },
    { asker_id: 7 },
    { asker_id: 8 },
    { asker_id: 9 },
  ];
  const answersArray = arrAsker;
  // const userID = JSON.parse(localStorage.getItem("UserID"));
  const userID = 1;
  /*   useEffect(() => {
    http
      .post("allAsker", `user_id=${userID}`)
      .then((resp) => resp.data)
      .then((askersData) =>
        setArrAsker(askersData.asker.filter((o) => o.watch_answer === "y"))
      );
  }, [userID]);
 */
  return (
    <div className={`fade-out ${styles.mainContainer}`}>
      <div className={styles.infoBlock}>
        {/* <div className={styles.infoText}>Brighton Art Gallery<br/> Cleaner Job in Brighton</div> */}
        <div className={styles.dropwrapper}>
          <AllAnswerIcon className={styles.infoIcon} />
          <Dropdown className={styles.dropcstm}>
            <Dropdown.Toggle variant="Primary" id="dropdown-basic">
              <span>Asker Subject is here Asker Subject is here Asker..</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <AllAnswerIcon className={styles.infoIcon} />{" "}
                <span>Asker Subject is here Asker Subject is here Asker..</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <AllAnswerIcon className={styles.infoIcon} />{" "}
                <span>Asker Subject is here Asker Subject is here Asker..</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <AllAnswerIcon className={styles.infoIcon} />{" "}
                <span>Asker Subject is here Asker Subject is here Asker..</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={styles.aright}>
          <div className={styles.dateTime}>
            <DatePicker placeholderText="Date" />
          </div>
          <div className={styles.searchinfo}>
            <input type="text" placeholder="Search" />
            <Search />
          </div>
          <div className={styles.settingIc}>
            <SettingIcon />
          </div>
        </div>
      </div>
      <div className={styles.answersWrapper}>
        <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={800}>
          <div className={styles.row}>
            {/* <div className={styles.answersSpace} /> */}
            {arrAsker.map((item, index) => {
              return (
                <div
                  key={item.asker_id}
                  onClick={() =>
                    navigate("/watch-answer", {
                      state: {
                        asker_id: item.asker_id,
                        user_id: userID,
                      },
                    })
                  }
                  className={styles.cardWrap}
                >
                  <div className={styles.answersContainer}>
                    <div className={styles.answerCard} />
                  </div>
                </div>
              );
            })}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default AllAnswers;
