import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import RightScreen from "../../../container/RightScreen/RightScreen";
import TabMenu from "../../TabMenu/TabMenu";
import styles from './Layout.module.scss'
import AccountSettings from "../../../container/AccountSettings/AccountSettings";
import Header from "../../Header/Header";
// import BurgerHeader from "../../BurgerHeader/BurgerHeader";
import {ReactComponent as BurgerMenu} from '../../../image/svg/burger-menu.svg';
import BurgerHeader from "../../BurgerHeader/BurgerHeader";
import Settings from "../../../container/Settings/Settings";

const Layout = ({children}) => {
  const {pathname} = useLocation();
  const [smallView, setSmallView] = useState(true)
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [showSettings, setShowSettings] = useState(false)


  const onClick = (buttonName) => {
    setIsSettingsActive(buttonName === 'settings')
  };

  useEffect(() => {
    if (pathname === '/'
      || pathname === '/log-in'
      || pathname === '/sign-up'
    ) {
      setSmallView(true)
    } else {
      setSmallView(false)
    }
  }, [pathname])

  console.log('pathname', pathname, pathname === '/log-in', smallView);

  return (
    <>
      <BurgerHeader pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } customBurgerIcon={<BurgerMenu />} right />
    <div className={`container ${styles.mainContainer}`} id={"page-wrap"}>
      <div className={styles.mainWrapper}>
      <div className={styles.headerBlock} >
        <Header />
      </div>

        <div className={styles.mainRow} >
          <div className={`${styles.mainCol} ${smallView ? styles.mainColSmall : null}`}>
            <div className={styles.contentWrapper}>
              {children}

              {!smallView ?
                <TabMenu onClick={onClick} setShowSettings={setShowSettings} showSettings={showSettings}/>
                // <TabMenu onClick={onClick}/>
                : null}
              {showSettings ?
                <>
                  <div className='blur-box'>
                    <Settings setShowSettings={setShowSettings} showSettings={showSettings}/>
                  </div>
                </> : null}
              {/*<div className={`blur-back ${isSettingsActive && 'blur-back_active'}`}/>*/}
              {/*<div className={`modalWindow ${isSettingsActive && 'modalWindow_active'}`}>*/}
              {/*  <AccountSettings isActive={isSettingsActive}/>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={`${styles.staticCol} ${smallView ? styles.staticColSmall : styles.staticCol}`}>
            <RightScreen/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};
export default Layout;
