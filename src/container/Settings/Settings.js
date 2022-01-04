import React from 'react';
import styles from './Settings.module.scss'
import TabSettings from "../../components/UI/icons/TabMenu/TabSettings";
import ContactName from "../../components/UI/icons/Contact/ContactName";
import ContactLink from "../../components/UI/icons/Contact/ContactLink";
import ContactEmail from "../../components/UI/icons/Contact/ContactEmail";
import ContactPhone from "../../components/UI/icons/Contact/ContactPhone";
import LockIcon from "../../components/UI/icons/LockIcon";
import BellIcon from "../../components/UI/icons/BellIcon";
import TwoMenIcon from "../../components/UI/icons/TwoMenIcon";
import PazlIcon from "../../components/UI/icons/PazlIcon";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import ArrowBack from "../../components/UI/icons/ArrowBack";
import ArrowDropdown from "../../components/UI/icons/ArrowDropdown";

const Settings = (props) => {
    return (
      <div className={styles.settingsContainer}>
        <div className={styles.settingsBackdrop}/>
        <div className={styles.settingsBar}>
          <div className={styles.settingsTitle}>
            <TabSettings className={`${styles.icon}`}/>
            <div className={styles.text}>Account Settings</div>
          </div>
          <div className={`${styles.infoCard} `}>
            <div className={styles.accountIcon}/>
            <div className={`${styles.infoBox}`}>
              <div className={styles.infoLine}>
                <ContactName className={styles.infoIcon}/>
                <div className={styles.contactBlock}>
                  <span className={styles.titleInfo}>Name</span>
                  <span className={styles.textInfo}>Antonio Pérez</span>
                </div>
              </div>
              <div className={styles.infoLine}>
                <ContactEmail className={styles.infoIcon}/>
                <div className={styles.contactBlock}>
                  <span className={styles.titleInfo}>Email</span>
                  <span className={styles.textInfo}>antonio.p@gmail.com</span>
                </div>
              </div>
              <div className={styles.infoLine}>
                <div className={styles.iconWrap}><LockIcon className={`${styles.lockIcon}`}/></div>
                <div className={styles.contactBlock}>
                  <span className={styles.titleInfo}>Password</span>
                  <span className={styles.textInfo}>updated 2 weeks ago</span>
                </div>
              </div>
              <div className={styles.infoLine}>
                <ContactPhone className={styles.infoIcon}/>
                <div className={styles.contactBlock}>
                  <span className={styles.titleInfo}>Phone number</span>
                  <span className={styles.textInfo}>07432932937</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.infoCard} `}>
            <div className={`${styles.infoBox}`}>
              <div className={styles.infoLine}>
                <div className={styles.iconWrap}>
                  <BellIcon className={`${styles.lockIcon}`}/>
                </div>
                <div className={styles.contactBlock}>
                  <span className={styles.titleInfo}>Notifications</span>
                  <span className={styles.textInfo}>Keep updated</span>
                </div>
              </div>
              <div className={styles.infoLine}>
                <div className={styles.iconWrap}>
                  <TwoMenIcon className={`${styles.twoMenIcon}`}/>
                </div>
                <div className={styles.contactBlock}>
                  <span className={styles.titleInfo}>Collaborate</span>
                  <span className={styles.textInfo}>For your teams</span>
                </div>
              </div>
              <div className={styles.infoLine}>
                <div className={styles.iconWrap}>
                  <PazlIcon className={`${styles.pazlIcon}`}/>
                </div>
                <div className={styles.contactBlock}>
                  <span className={styles.titleInfo}>API & Integration</span>
                  <span className={styles.textInfo}>For your workflow</span>
                </div>
                <button type='button' className={styles.arrowBtn}><ArrowDropdown className={styles.arrowIcon}/></button>
              </div>

            </div>
          </div>

        </div>
        {/*</div>*/}
        {/*  <div className={`${styles.card} ${styles.accountWrapper}`}>*/}
        {/*    <div className={styles.accountIcon}/>*/}
        {/*    <div className={styles.accountInfo}>*/}
        {/*      <div className={styles.option}>*/}
        {/*        <div className={styles.option__icon}/>*/}
        {/*        <div className={styles.option__info}>*/}
        {/*          <span className={styles.option__info__title}>Name</span>*/}
        {/*          <span className={styles.option__info__text}>Antonio Pérez</span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className={styles.option}>*/}
        {/*        <div className={styles.option__icon}/>*/}
        {/*        <div className={styles.option__info}>*/}
        {/*          <span className={styles.option__info__title}>Email</span>*/}
        {/*          <span className={styles.option__info__text}>antonio.p@gmail.com</span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className={styles.option}>*/}
        {/*        <div className={styles.option__icon}/>*/}
        {/*        <div className={styles.option__info}>*/}
        {/*          <span className={styles.option__info__title}>Password</span>*/}
        {/*          <span className={styles.option__info__text}>updated 2 weeks ago</span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className={styles.option}>*/}
        {/*        <div className={styles.option__icon}/>*/}
        {/*        <div className={styles.option__info}>*/}
        {/*          <span className={styles.option__info__title}>Phone number</span>*/}
        {/*          <span className={styles.option__info__text}>07432932937</span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={`${styles.card} ${styles.functionalityWrapper}`}>*/}
        {/*    <div className={styles.option}>*/}
        {/*      <div className={styles.option__icon}/>*/}
        {/*      <div className={styles.option__info}>*/}
        {/*        <span className={styles.option__info__title}>Notifications</span>*/}
        {/*        <span className={styles.option__info__text}>Keep updated</span>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className={`${styles.option} ${styles.option_disabled}`}>*/}
        {/*      <div className={styles.option__icon}/>*/}
        {/*      <div className={styles.option__info}>*/}
        {/*        <span className={styles.option__info__title}>Collaborate </span>*/}
        {/*        <span className={styles.option__info__text}>For your teams</span>*/}
        {/*      </div>*/}
        {/*      <i className={styles.arrow}/>*/}
        {/*    </div>*/}
        {/*    <div className={`${styles.option} ${styles.option_disabled}`}>*/}
        {/*      <div className={styles.option__icon}/>*/}
        {/*      <div className={styles.option__info}>*/}
        {/*        <span className={styles.option__info__title}>API & Integration</span>*/}
        {/*        <span className={styles.option__info__text}>For your workflow</span>*/}
        {/*      </div>*/}
        {/*      <i className={styles.arrow}/>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={`${styles.card} ${styles.someComponent}`}/>*/}
        {/*</div>*/}
      </div>
    )
  }
;

export default Settings;
