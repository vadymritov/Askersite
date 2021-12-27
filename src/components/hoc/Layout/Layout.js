import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import RightScreen from "../../../container/RightScreen/RightScreen";
import TabMenu from "../../TabMenu/TabMenu";

const Layout = ({children}) => {
  const {pathname} = useLocation();
  const [smallView, setSmallView] = useState(true)

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
    <div className='container main-container'>
      <div className="main-row">
        <div className={`main-col ${smallView ?  'main-col-small' : null}`}>
          <div className="content-wrapper">
            {children}

            {!smallView ?
              <TabMenu />
              : null}
          </div>
        </div>
        <div className={`static-col ${smallView ?  'static-col-small' : 'static-col'}`}>
          <RightScreen />
        </div>
      </div>
    </div>

  )
};
export default Layout;
