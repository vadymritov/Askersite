import React from 'react';
import styles from './TabMenu.module.scss'
import {NavLink} from "react-router-dom";
import TabWatch from "../UI/icons/TabMenu/TabWatch";
import TabAsk from "../UI/icons/TabMenu/TabAsk";
import TabAnswer from "../UI/icons/TabMenu/TabAnswer";
import TabSettings from "../UI/icons/TabMenu/TabSettings";

const TabMenu = (props) => {

  return (
    <div className={styles.tabContainerWrap}>
      <div className={styles.tabContainer}>
        <NavLink to={'/watch-answer'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>
          <TabWatch className={`${styles.taIcon}`}/>
          <span>Watch</span>
        </NavLink>
        <NavLink to={'/create-asker'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>
          <TabAsk className={`${styles.taIcon}`}/>
          <span>Ask</span>
        </NavLink>
        <NavLink to={'/'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>
          <TabAnswer className={`${styles.taIcon}`}/>
          <span>Answer</span>
        </NavLink>
        <NavLink to={'/'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>
          <TabSettings className={`${styles.taIcon}`}/>
          <span>Settings</span>
        </NavLink>

      </div>
    </div>
  )
};

export default TabMenu;
