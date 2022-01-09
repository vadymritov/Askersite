import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from "./Dashboard.module.scss";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import Logo from "../../components/UI/icons/Logo";
import GrayyTringleIcon from "../../components/UI/icons/GrayyTrangleIcon";
import MenuBurgerIcon from "../../components/UI/icons/MenuBurgerIcon";
import LinePhone from "../../components/UI/icons/LinePhone";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import DashbordLogoIcon from "../../components/UI/icons/DashbordLogoIcon";
import ShareIcon from "../../components/UI/icons/ShareIcon";
import AddQuestion from "../../components/UI/icons/AddQuestion";
import PlusIcon from "../../components/UI/icons/Create/PlusIcon";

const Dashboard = (props) => {
  const [timer, setTimer] = useState()
  const arr = [1, 2, 3, 4, ]
  let navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(async () => {

    if(cardRef?.current?.classList.contains("start-rotate")){
      cardRef?.current?.classList.remove("start-rotate")
    }

    const timer = setTimeout(() => {
      cardRef?.current?.classList.add("start-rotate")
    }, 1);

    return () => clearTimeout(timer);
  }, [props]);

  const createAsker = () => {
    navigate('/create-asker')
  }

  // const removeEffect = () => {
  //   elRef.current?.classList.add("ease-out-effect")
  //   const timer = setTimeout(() => {
  //     navigate('/share-asker')
  //   }, 300);
  //   return timer;
  // };


  return (
    <div ref={cardRef} className={`default-flip flip-card-inner  ${styles.createContainer}`}>
      <div className={styles.bgContainer}>
        <div className={styles.contantWrap}>
          <div className={styles.topBox}>
            <GrayyTringleIcon className={styles.grayBg}/>
            <div className={styles.menuWBox}>
              <NavLink to={'/'}><Logo className={styles.logo}/></NavLink>
              <button type='button' className={styles.burgerBtn}>
                <MenuBurgerIcon className={styles.burgerIcon}/>
              </button>
            </div>
            <div className={styles.headBox}>
              <button type='button' className={`${styles.tabBox} ${styles.tabLeft}`}>
                All
              </button>
              <button type='button' className={`${styles.tabBox} ${styles.active}`}>
                ACTIVE
              </button>
              <button type='button' className={`${styles.tabBox} ${styles.tabright}`}>
                INACTIVE
              </button>
            </div>

            <div className={styles.row}>
              <div className={styles.rowAnswers}>
                {
                  arr.map((item, index) => {
                    return <div key={index} className={styles.cardWrap}>
                      <div className={styles.answersContainer}>
                        <DashbordLogoIcon className={styles.createLogo}/>
                        <div className={` ${styles.questionBlock}`}>
                          <div className={styles.textBox}>
                            <div className={styles.title}>Cleaner job in Brighton</div>
                            <div className={styles.text}>Brighton Art Gallery</div>
                          </div>
                        </div>
                        <div className={`${styles.buttonBox}`}>
                          <button type="submit" className={`continue-btn ${styles.buttonItem}`}>
                            <span>12 NEW ANSWERS</span>
                            <div className={styles.plusIconBox}>
                              <ArrowBtn className={`${styles.shareIcon}`}/>
                            </div>
                          </button>
                        </div>

                      </div>
                    </div>
                  })
                }
                <div className={styles.cardWrap}>
                  <button type='button' className={styles.addAskerBtn}>
                    <PlusIcon className={styles.plusIcon}/>
                  </button>
                </div>
              </div>


            </div>
          </div>

          <div className={`${styles.buttonBox}`}>
            <button type="submit" className={`continue-btn  ${styles.buttonStyle}`} onClick={createAsker}>
              <span className={styles.buttonStyleText}>CREATE ASKER</span>
              <AddQuestion className={styles.arrowBtn}/>
            </button>
            <LinePhone className={styles.linePhone}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
