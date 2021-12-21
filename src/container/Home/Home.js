import React, {useState} from 'react';
import AskerHomeStatic from "./AskerHomeStatic";

const Home = (props) => {
  const [LoginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <AskerHomeStatic/>

      {/*{LoginStatus ? <PromotionVideo/> : <AskerHomeStatic/>}*/}
    </>
  )
};

export default Home;
