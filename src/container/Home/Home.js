import React, {useState} from 'react';
import AskerHomeStatic from "./AskerHomeStatic";
import PromotionVideo from "./PromotionVideo";

const Home = (props) => {
  const [LoginStatus, setLoginStatus] = useState(false);

  return (
    <>
      {LoginStatus ? <PromotionVideo/> : <AskerHomeStatic/>}
    </>
  )
};

export default Home;
