import React from 'react';
import styles from './Login.module.scss';
import QuestionLogin from "../../components/UI/icons/QuestionLogin";
import LogoWhite from "../../components/UI/icons/LogoWhite";
import ArrowBack from "../../components/UI/icons/ArrowBack";
import {useForm} from "react-hook-form";
import Input from "../../components/UI/Input/Input";

const Login = (props) => {
  const { register, handleSubmit,formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.contentBox}>
          <button type='button' className={styles.arrowBtn}><ArrowBack className={styles.arrowBack}/></button>
          <div className={styles.logoBox}>
            <QuestionLogin className={styles.questionIcon}/>
            <LogoWhite className={styles.logo}/>
          </div>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <Input
              name='email'
              placeholder='Email'
              addPadding={true}
              ><QuestionLogin className={styles.inputIcon}/></Input>
            <Input
              name='password'
              placeholder='Password'
              ><QuestionLogin className={styles.inputIcon}/></Input>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;
