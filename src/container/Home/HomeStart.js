import React from 'react';
import styles from './Home.module.scss'

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
            <div className={styles.iconTop}/>
          </div>
          <div className={styles.imgWrapStatic}/>
          <div className={`${styles.questionBottom}`}>
            <div className={`${styles.iconBottom}`}/>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </div>
  );

};

export default HomeStart;
