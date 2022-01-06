import React, {useEffect, useState} from 'react';
import styles from './TabMenu.module.scss'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import TabWatch from "../UI/icons/TabMenu/TabWatch";
import TabAsk from "../UI/icons/TabMenu/TabAsk";
import TabAnswer from "../UI/icons/TabMenu/TabAnswer";
import TabSettings from "../UI/icons/TabMenu/TabSettings";
import {getQueryParams} from "../../utils/helpers";

const TabMenu = (props) => {
  const {pathname} = useLocation();
  const [askTabActive, setAskTabActive] = useState(false);
  const [watchTabActive, setWatchTabActive] = useState(false);
  const [answerTabActive, setAnswerTabActive] = useState(false);
  const [askSettingsActive, setSettingsTabActive] = useState(false);

  const {search} = useLocation();
  const targetUrl = getQueryParams(search);
  let navigate = useNavigate();
let url = window.location.href.split('/').slice(-1)[0]

  const toggleSettings = () => {
    props.setShowSettings(!props.showSettings)
  }

  useEffect(() => {
    if (pathname === '/create-asker'
      || pathname === '/share-asker'
      || pathname === '/dashboard'
      || pathname === '/edit-asker'
      || pathname === '/view-asker') {
      setAskTabActive(true)
    }

    if (pathname === '/answer'
      || pathname === '/asker-search'
      || pathname === '/start-asker'
      || pathname === '/next-question'
      || pathname === '/record-again'
      || pathname === '/progress'
      || pathname === '/asker-complete'
      ) {
      setAnswerTabActive(true)
    }
  })

  console.log('props.showSettings', props.showSettings);


  return (
    <div className={styles.tabContainerWrap}>
      <div className={styles.tabContainer}>
        <NavLink onClick={() => props.onClick('watch')} to={'/watch-answer'} className={({isActive}) => (`${styles.tabItem} ${isActive ? styles.activeTab : ''} `)}>
          <TabWatch className={`${styles.taIcon}`}/>
          <span>Watch</span>
        </NavLink>
        <NavLink to={'/create-asker'} className={({isActive}) => (`${styles.tabItem} ${isActive || askTabActive ? styles.activeTab : ''}  `)}>
          <TabAsk className={`${styles.taIcon}`}/>
          <span>Ask</span>
        </NavLink>
        <NavLink onClick={() => props.onClick('answer')} to={'/'} className={({isActive}) => (`${styles.tabItem} ${isActive || answerTabActive ? styles.activeTab : ''} `)}>
          <TabAnswer className={`${styles.taIcon}`}/>
          <span>Answer</span>
        </NavLink>
        <button type='button'  className={`${styles.tabItem} ${!!props.showSettings ? styles.activeTab : ''}`} onClick={() => toggleSettings()}>
          <TabSettings className={`${styles.taIcon} `}/>
          <span>Settings</span>
        </button>

      </div>
    </div>
  )
};

export default TabMenu;
