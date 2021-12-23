import React from 'react';
import styles from "./SignUp.module.scss";
import ArrowBack from "../../components/UI/icons/ArrowBack";
import QuestionLogin from "../../components/UI/icons/QuestionLogin";
import LogoWhite from "../../components/UI/icons/LogoWhite";
import Input from "../../components/UI/Input/Input";
import EmailIcon from "../../components/UI/icons/EmailIcon";
import LockIcon from "../../components/UI/icons/LockIcon";
import {NavLink} from "react-router-dom";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import LinePhone from "../../components/UI/icons/LinePhone";
import {useForm} from "react-hook-form";

const CreateAccount = ({...props}) => {
  const {register, handleSubmit, formState: {errors}} = useForm();

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
              addPadding={true}
              register={register("name", {required: true})}
              // required
              onChange={(e) =>
                console.log('Full name', e.target.value)
              }
            ><EmailIcon className={styles.emailIcon}/></Input>
            <Input
              name='password'
              type='password'
              defaultValue={null}
              placeholder='Password'
            ><LockIcon className={styles.lockIcon}/></Input>
          </div>
          <NavLink to={'/'} className={`${styles.text} ${styles.paddingTop}`}>No account?</NavLink>
          <NavLink to={'/'} className={`${styles.title} ${styles.greenText}`}>JOIN ASKER</NavLink>
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
