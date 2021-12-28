import React, {useEffect, useRef, useState} from 'react';
import styles from "./SignUp.module.scss";
import ArrowBack from "../../components/UI/icons/ArrowBack";
import QuestionLogin from "../../components/UI/icons/QuestionLogin";
import LogoWhite from "../../components/UI/icons/LogoWhite";
import Input from "../../components/UI/Input/Input";
import {NavLink, useHistory, useNavigate} from "react-router-dom";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import LinePhone from "../../components/UI/icons/LinePhone";
import {useForm} from "react-hook-form";
import MenIcon from "../../components/UI/icons/MenIcon";
import {http} from '../../http/http'
import SelectPickerPhone from "../../components/UI/SelectPickerPhone/SelectPickerPhone";

const CountryData = [
  {
    "label": "Eugenia",
    "value": "+2",
    "role": "Master"
  },
  {
    "label": "Kariane",
    "value": "Kariane",
    "role": "Master"
  },
  {
    "label": "Louisa",
    "value": "Louisa",
    "role": "Master"
  },
  {
    "label": "Marty",
    "value": "Marty",
    "role": "Master"
  },
  {
    "label": "Kenya",
    "value": "Kenya",
    "role": "Master"
  },
  {
    "label": "Hal",
    "value": "Hal",
    "role": "Developer"
  },
  {
    "label": "Julius",
    "value": "Julius",
    "role": "Developer"
  },
  {
    "label": "Travon",
    "value": "Travon",
    "role": "Developer"
  },
  {
    "label": "Vincenza",
    "value": "Vincenza",
    "role": "Developer"
  },
  {
    "label": "Ukraine",
    "value": "+380",
    "role": "Developer"
  },
]

const CreateAccount = ({...props}) => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();
  // let history = useHistory();
  let a = {label: "blank", value: "blank", role: "Master"};
  // const [Country, setCountry] = useState([]);
  const componentMounted = useRef(false);
  // const [CountryData, setCountryData] = useState([a]);

  const [countryData, setCountryData] = useState(CountryData);
  const countryCodeRef = useRef('+1');


  const onSendData = (data) => {
    console.log('onSendDat', {...data, country_code: countryCodeRef.current});
    const {name, phone} = data;
    http.post('http://127.0.0.1:8000/api/APIsendsms', {
      name, phone, country_code: countryCodeRef.current
    })
    props.nextStep(data)
  };

  const OnChangeSelectValue = (countryCode) => {
    countryCodeRef.current = countryCode;
  }

  useEffect(async () => {
    const user = localStorage.getItem("User");
    if (user === "Logout" || user === null) {
    }
    else {
      navigate('/');
    }
    http.post('http://127.0.0.1:8000/api/country').then((res) => {
      if (res.status === true) {
        const arr = [];
        res?.country?.map((item) => {
          const myObj = {
            value: item?.CountryId + "," + item?.phonecode,
            label: item?.countryName + " " + item?.phonecode,
            role: "Master",
          };
          arr.push(myObj);
        });
        setCountryData(arr);
      }
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <>
      <div className={`fade-in ${styles.content}`}>
        <button type='button' className={styles.arrowBtnWrap}><ArrowBack className={styles.arrowBack}/></button>
        <div className={styles.logoBox}>
          <QuestionLogin className={styles.questionIcon}/>
          <LogoWhite className={styles.logo}/>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSendData)}>
          <div className={styles.title}>Create Account</div>
          <div className={styles.text}>Enter your name & mobile number</div>
          <div className={styles.inputBox}>
            <Input
              name='name'
              type='text'
              defaultValue={null}
              placeholder='Full name'
              errors={errors}
              addPadding={true}
              register={register("name", )}
              // required
              onChange={(e) =>
                console.log('Full name', e.target.value)
              }
            ><MenIcon className={styles.menIcon}/>
            </Input>
            {/*

            <div className={`text-filled with-icon select-filled mobile-filled ${styles.inputPhoneWrap} `}>
                <div className={styles.iconSelectWrap}/>
              <div className={styles.selectBox}>
                <SelectPickerPhone
                  placeholder={"+1"}
                  data={CountryData}
                  defaultValue={"+1"}
                  // defaultValue={"254,+1"}
                  disabledItemValues={['Eugenia', 'Travon', 'Vincenza']}
                  onChange={(value) =>
                    changeHandler(value)
                  }
                />
              </div>
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />
            </div>
*/}
            <SelectPickerPhone
              onChange={OnChangeSelectValue}
              placeholder={'placeholder'}
              inputRegister={register("phone", {required: true})}
              data={countryData}
              defaultValue={'+1'}/>


          </div>
          <div className={`${styles.text} ${styles.paddingTop}`}>Already have an account?</div>
          <NavLink to={'/sign-in'} className={`${styles.title} ${styles.greenText}`}>SIGN IN</NavLink>
          <div className={`${styles.buttonBox}`}>
            <button type="submit" className={`continue-btn`}>
              <span>Continue</span>
              <ArrowBtn className={styles.arrowBtn}/>
            </button>
            <LinePhone className={styles.linePhone}/>
          </div>
        </form>
      </div>
    </>
  )
};

export default CreateAccount;
