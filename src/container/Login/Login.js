import React, {useState} from 'react';
import styles from './Login.module.scss';
import QuestionLogin from "../../components/UI/icons/QuestionLogin";
import LogoWhite from "../../components/UI/icons/LogoWhite";
import ArrowBack from "../../components/UI/icons/ArrowBack";
import {useForm} from "react-hook-form";
import Input from "../../components/UI/Input/Input";
import EmailIcon from "../../components/UI/icons/EmailIcon";
import LockIcon from "../../components/UI/icons/LockIcon";
import {NavLink} from "react-router-dom";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import LinePhone from "../../components/UI/icons/LinePhone";
import {regexEmail} from "../../utils/helpers";

const Login = (props) => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log('onSubmit', data);
  };

  return (
    <div className={`container-login`}>
      <div className={`contentWrap-login`}>
        <div className={`contentBox-login`}>
          <div className={`fade-in ${styles.content}`}>
            <button type='button' className={styles.arrowBtnWrap}><ArrowBack className={styles.arrowBack}/></button>
            <div className={styles.logoBox}>
              <QuestionLogin className={styles.questionIcon}/>
              <LogoWhite className={styles.logo}/>
            </div>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)} role={'form'} >
              <div className={styles.title}>Log in</div>
              <div className={styles.text}>Enter your login details.</div>
              <div className={styles.inputBox}>
                <Input
                  name='email'
                  type='email'
                  placeholder='Email'
                  register={register("email", {required: true, maxLength: 128, pattern: regexEmail})}
                  addPadding={true}
                ><EmailIcon className={styles.emailIcon}/></Input>
                <Input
                  name='password'
                  type='password'
                  placeholder='Password'
                ><LockIcon className={styles.lockIcon}/></Input>
              </div>
              <NavLink to={'/'} className={`${styles.text} ${styles.paddingTop}`}>No account?</NavLink>
              <NavLink to={'/'} className={`${styles.title} ${styles.greenText}`}>JOIN ASKER</NavLink>
              <div className={`${styles.buttonBox}`}>
                <button type="submit" className={`continue-btn`}>
                  <span>Continue</span>
                  <ArrowBtn className={styles.arrowBtn}/>
                </button>
                <LinePhone className={styles.linePhone}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
