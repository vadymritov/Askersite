import React from 'react';
import styles from './Home.module.scss'
import ClockIcon from "../../components/UI/icons/ClockIcon";

const HomeStart = (props) => {


  return (
    <div className={styles.askerWrapper} id="homeTiltWrapper">
      <div className={`${styles.askerRow}`}>
        <div className={`${styles.askerCol}`}>
          <div className={`${styles.imgWrap}`}>
            <div className={styles.shadow}/>
            <div className={styles.listingImg}>
              <div className={styles.iconImg}/>
            </div>
          </div>
        </div>
        <div className={`${styles.askerCol}`}>
          <div className={styles.question}>
            {/*<div className={styles.iconTop}/>*/}
            <div className={`${styles.floatingBoxTop}`}>
              <div className={`${styles.floatingBottomContent}`}>
                <div className={`${styles.circleBox}`}/>
                <div className={`${styles.floatingText}`}>Tell me what makes you perfect for this role</div>
                <div className={styles.iconsBox}>
                  <ClockIcon className={styles.iconClock}/>
                  <span>30s</span>
                </div>
              </div>

            </div>
          </div>
          <div className={styles.imgWrapStatic}/>
          {/*<div className={`${styles.questionBottom}`}>*/}
          {/*  <div className={`${styles.iconBottom}`}/>*/}
          {/*</div>*/}
          <div className={`${styles.questionBottom}`}>
            {/*<div className={`${styles.iconBottom}`}/>*/}
            <div className={`${styles.floatingBoxBottom}`}>
              <div className={`${styles.floatingBottomContent}`}>
                <div className={`${styles.circleBox}`}/>
                <div className={`${styles.floatingText}`}>Introduce yourself in 60 seconds or less</div>
                <div className={styles.iconsBox}>
                  <ClockIcon className={styles.iconClock}/>
                  <span>30s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </div>
  );

};

export default HomeStart;
