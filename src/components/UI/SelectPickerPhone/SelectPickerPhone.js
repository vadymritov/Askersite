import React, {useEffect, useRef, useState} from 'react';
import styles from './SelectPickerPhone.module.scss';
// import * as cn from "classnames";


const SelectPickerPhone = ({onChange, data, placeholder, defaultValue, inputRegister}) => {
  const [searchCodeShown, setSearchCodeShown] = useState(false);
  const searchFieldRef = useRef();
  const isSearching = useRef(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [currentCountryCode, setCurrentCountryCode] = useState(defaultValue);

  const [optionsList, setOptionsList] = useState(data);

  const checkWindowClick = (e) => {
    if (searchFieldRef.current &&
      searchCodeShown &&
      !e.composedPath().includes(searchFieldRef.current)) {
      setSearchCodeShown(false);
    }
  }

  useEffect(() => {
    console.log(optionsList);
  }, [optionsList])

  const OnChange = e => {
    isSearching.current = e.target.value.length > 0;
    const regex = new RegExp(e.target.value || '.+', 'i');
    setOptionsList(prevState => {
      return data.map(el => {
        if(el.label){
          const candidate =  el.label.match(regex);
          if(candidate && candidate[0] !== ''){
            console.log(candidate.input);
            return {label: candidate.input, value: el.value};
          }
        }
      }).filter(el => el != null)
    })

  }



  useEffect(() => {
    document.addEventListener('click', checkWindowClick)
    return () => document.removeEventListener('click', checkWindowClick)
  })

  return (
    <div className={styles.selectPickerWrapper}>
      <div className={styles.pickerWrapper}>
        <div className={styles.countryCodeField} onClick={() => setSearchCodeShown(prevState => !prevState)}>
          <div className={styles.iconWrapper}/>
          <span>{currentCountryCode}</span>
        </div>
        <input type="number" className={styles.phoneNumberField} placeholder={"Mobile Number"} {...inputRegister}/>
      </div>
      <div ref={searchFieldRef} className={`${styles.searchWrapper} ${searchCodeShown ? styles.searchWrapper_active : ''}`}>
        <div className={styles.searchFieldWrapper}>
          <input className={styles.searchField} type="text" placeholder={"Search"} onChange={OnChange} />
        </div>
        <div className={styles.countryCodeList}>
          {optionsList?.length > 0 ? optionsList?.map((el, index) => {
            return <span onClick={() => {
              setSelectedItem(el.label);
              setSearchCodeShown(false);
              setCurrentCountryCode(el.value);
              onChange(el.value);
            }} className={`${styles.countryCodeOption} ${isSearching.current && index === 0 ? styles.countryCodeOption_active : ''} ${ el.label === selectedItem ? styles.countryCodeOption_selected : ''}`} key={index}>{el.label}</span>
          }) : <span className={styles.noResult}>No results found</span>}
        </div>
      </div>
    </div>
  )
}

export default SelectPickerPhone;
