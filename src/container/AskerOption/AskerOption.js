import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import OptionContent from "./OptionContent";
import EditAsker from "../EditAsker/EditAsker";
import ShareAsker from "../ShareAsker/ShareAsker";
import styles from './AskerOption.module.scss'

const AskerOption = ({onChange, location, viewAsker, ...props}) => {
    const [selectPrivate, setSelectPrivate] = useState("");
    const [type, setType] = useState("option");
    // const location = useLocation();
    const [askerCode,setAskerCode] = useState()

    console.log('option', selectPrivate, type, viewAsker)

    useEffect(() => {
      if (type === 'edit') {

      }
    })

    const closeOption = (e) => {
      console.log('onChange',);
      e.preventDefault();
      onChange('front');
      setType('option')

    }

    const renderContent = () => {
      if (type === 'option') {
        return <OptionContent closeOption={closeOption}
                              selectPrivate={selectPrivate}
                              location={location}
                              setSelectPrivate={setSelectPrivate}
                              setType={setType}
        />
      } else if (type === 'edit') {
        return <EditAsker setAskerCode={setAskerCode}  setType={setType} location={location}/>
      } else if (type === 'share') {
        return <ShareAsker askerCode={askerCode} setType={setType} closeOption={closeOption} createType='create' location={location}/>
      }
    }


    return (
      <div className={styles.optionalContainer}>
        {renderContent()}
      </div>
    )
  }
;

export default AskerOption;
