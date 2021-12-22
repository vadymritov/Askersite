import React from 'react';
import styles from './Home.module.scss'
import QuestionTop from "../../components/UI/icons/QuestionTop";

const AskerHomeStatic = (props) => {
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
            <div className={styles.iconTop}/>
          </div>
          <div className={styles.imgWrapStatic}/>
          <div className={`${styles.questionBottom}`}>
            <div className={`${styles.iconBottom}`}/>
          </div>

          {/*<div className="home-tilt-inner lft">*/}
            {/*<div className="img-wrapper">*/}
            {/*    <div className="img mscreen-img">*/}
            {/*        <img alt="" src={tilt01} />*/}
            {/*    </div>*/}
            {/*    <div className="img pos-abs boxing-img tilt-js">*/}
            {/*        <img alt="" src={tilt03} />*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="img pos-abs listing-img tilt-js">*/}
            {/*    <img alt="" src={tilt04} />*/}
            {/*</div>*/}

        </div>
      </div>
      {/*</div>*/}
    </div>
  );

};

export default AskerHomeStatic;
