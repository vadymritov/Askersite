import React from 'react';
import styles from './Home.module.scss'

const AskerHomeStatic = (props) => {
  return (
    <div className={styles.askerWrapper} id="homeTiltWrapper">
      {/*<div className="home-tilt-wrapper hasHomePage" id="homeTiltWrapper">*/}
      {/*    <div className="container">*/}
      <div className={`${styles.askerRow}`}>
        <div className={`${styles.askerCol}`}>
          <div className={`home-tilt-inner rgt ${styles.imgWrap}`}>
            <div className={styles.shadow}/>
            <div className={styles.listingImg}>
              <div className={styles.iconImg}/>
            </div>
            {/*<div className="img mscreen-img">*/}
            {/*<img alt="" src={tilt02} />*/}
            {/*</div>*/}
            {/*<div className{`${styles.listingImg}`}>*/}
            {/*<div className{`img pos-abs listing-img tilt-js ${styles.listingImg}`}>*/}
            {/*<img alt="" src={tilt05} />*/}
            {/*</div>*/}
          </div>
        </div>
        <div className={`col col-md-6 home-tilt-col ${styles.askerCol}`}>
          <div className="home-tilt-inner lft">
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
      </div>
      {/*</div>*/}
    </div>
  );

};

export default AskerHomeStatic;
