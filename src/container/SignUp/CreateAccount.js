import React, {useState} from 'react';
import styles from "./SignUp.module.scss";
import ArrowBack from "../../components/UI/icons/ArrowBack";
import QuestionLogin from "../../components/UI/icons/QuestionLogin";
import LogoWhite from "../../components/UI/icons/LogoWhite";
import Input from "../../components/UI/Input/Input";
import EmailIcon from "../../components/UI/icons/EmailIcon";
import LockIcon from "../../components/UI/icons/LockIcon";
import {NavLink, useHistory} from "react-router-dom";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import LinePhone from "../../components/UI/icons/LinePhone";
import {useForm} from "react-hook-form";
import QuestionSmall from "../../components/UI/icons/QuestionSmall";
import {SelectPicker} from "rsuite";
import MenIcon from "../../components/UI/icons/MenIcon";

const CreateAccount = ({...props}) => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  // let history = useHistory();
  let a = {label: "blank", value: "blank", role: "Master"};
  // const [Country, setCountry] = useState([]);
  const [value, setValue] = useState("");
  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [CountryData, setCountryData] = useState([a]);

  const changeHandler = async (value) => {
    let val = value.split(",");
    setValue(val[1]);

    // const resultObject = await search(val[0], Country);
    // $(".flag").find("img").attr("src", resultObject.unicode);
    // $(".rs-picker-toggle").find(".rs-picker-toggle-value").text(val[1]);
  };

  // function search(nameKey, myArray) {
  //   let finddata = parseInt(nameKey);
  //   for (let i = 0; i < myArray.length; i++) {
  //     if (myArray[i]?.CountryId === finddata) {
  //       return myArray[i];
  //     }
  //   }
  // }


  const onSubmit = (data) => {
    console.log('onSubmit', data);
  };

  const onSendData = (data) => {
    console.log('onSendDat', data);
    props.nextStep(data)
  };


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
              register={register("name", {required: true})}
              // required
              onChange={(e) =>
                console.log('Full name', e.target.value)
              }
            ><MenIcon className={styles.menIcon}/>
            </Input>
            <div className={`text-filled with-icon select-filled mobile-filled ${styles.inputPhoneWrap} `}>
                <div className={styles.iconSelectWrap}/>
              <div className={styles.selectBox}>
                <SelectPicker
                  placeholder={"+1"}
                  data={CountryData}
                  defaultValue={"+1"}
                  // defaultValue={"254,+1"}
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
            {/*<div className="cust-form-col">*/}
            {/*  <div className="text-filled with-icon select-filled mobile-filled">*/}
            {/*    <div className={styles.iconSelectWrap}/>*/}
            {/*    <SelectPicker*/}
            {/*      placeholder="Select Country"*/}
            {/*      data={CountryData}*/}
            {/*      defaultValue={"254,+1"}*/}
            {/*      onChange={(value) =>*/}
            {/*        changeHandler(value)*/}
            {/*      }*/}
            {/*    />*/}
            {/*    <input*/}
            {/*      type="number"*/}
            {/*      name="phone"*/}
            {/*      placeholder="Mobile Number"*/}
            {/*      onChange={(e) =>*/}
            {/*        setPhone(e.target.value)*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}


          </div>
          <div className={`${styles.text} ${styles.paddingTop}`}>Already have an account?</div>
          <NavLink to={'/sign-in'} className={`${styles.title} ${styles.greenText}`}>SIGN IN</NavLink>
          <div className={`${styles.buttonBox}`}>
            <button type="button" className={`continue-btn`} onClick={onSendData}>
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
