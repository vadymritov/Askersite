import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import RightScreen from "../../../container/RightScreen/RightScreen";
import TabMenu from "../../TabMenu/TabMenu";
import AccountSettings from "../../../container/AccountSettings/AccountSettings";
import Header from "../../Header/Header";
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

  console.log('pathname', pathname, pathname, showSettings);

  return (
    <div className='container main-container'>
      <div className="main-wrapper">
        <div className="header-block">
          <Header/>
        </div>

        <div className="main-row">
          <div className={`main-col ${smallView ? 'main-col-small' : null}`}>
            <div className="content-wrapper">
              {children}

              {!smallView ?
                <TabMenu onClick={onClick} setShowSettings={setShowSettings} showSettings={showSettings}/>
                : null}
              {showSettings ?
                <>
                  <div className='blur-box'>
                  <Settings setShowSettings={setShowSettings} showSettings={showSettings}/>
                </div>
                </> : null}
            </div>
          </div>
          <div className={`static-col ${smallView ? 'static-col-small' : 'static-col'}`}>
            <RightScreen/>
          </div>
        </div>
      </div>
    </div>

  )
};
export default Layout;
