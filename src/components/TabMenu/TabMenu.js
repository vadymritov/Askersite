import React, {useEffect, useState} from 'react';
import styles from './TabMenu.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import TabWatch from "../UI/icons/TabMenu/TabWatch";
import TabAsk from "../UI/icons/TabMenu/TabAsk";
import TabAnswer from "../UI/icons/TabMenu/TabAnswer";
import TabSettings from "../UI/icons/TabMenu/TabSettings";

const TabMenu = (props) => {
  const {pathname} = useLocation();
  const [askTabActive, setAskTabActive] = useState(false);
  const [watchTabActive, setWatchTabActive] = useState(false);
  const [answerTabActive, setAnswerTabActive] = useState(false);
  const [askSettingsActive, setSettingsTabActive] = useState(false);

  useEffect(() => {
    if (pathname === '/create-asker'
      || pathname === '/share-asker'
      || pathname === '/dashboard'
      || pathname === '/edit-asker'
      || pathname === '/view-asker') {
      setAskTabActive(true)
    }
  })


  return (
    <div className={styles.tabContainerWrap}>
      <div className={styles.tabContainer}>
        <NavLink onClick={() => props.onClick('watch')} to={'/watch-answer'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>
          <TabWatch className={`${styles.taIcon}`}/>
          <span>Watch</span>
        </NavLink>
        <NavLink to={'/create-asker'} className={({isActive}) => (`${styles.tabItem} ${isActive || askTabActive ? styles.activeTab : ''}  `)}>
        {/*<NavLink onClick={() => props.onClick('ask')} to={'/create-asker'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>*/}
          <TabAsk className={`${styles.taIcon}`}/>
          <span>Ask</span>
        </NavLink>
        <NavLink onClick={() => props.onClick('answer')} to={'/'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>
          <TabAnswer className={`${styles.taIcon}`}/>
          <span>Answer</span>
        </NavLink>
        <NavLink to={'/settings'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)} onClick={() => props.onClick('settings')}>
          <TabSettings className={`${styles.taIcon}`}/>
          <span>Settings</span>
        </NavLink>

      </div>
    </div>
  )
};

export default TabMenu;
