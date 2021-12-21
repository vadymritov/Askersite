import React from 'react';
import {useLocation} from "react-router-dom";

const Layout = ({children}) => {
  const {pathname} = useLocation();

  return (
    <div className='container main-container'>
      <div className="main-row">
        <div className="main-col">
          <div className="content-wrapper">
            {children}

            {/*{pathname !== '/' ?*/}
            {/*  <BottomTab/>*/}
              {/*: null}*/}
          </div>
        </div>
        <div className="col col-md-6 col-xl-7 static-col">
          {/*<StaticScreen/>*/}
        </div>
      </div>
    </div>

  )
};
export default Layout;
