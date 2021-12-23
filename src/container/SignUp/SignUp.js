import React, {useState} from 'react';
import {useForm} from "react-hook-form";
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
import {regexEmail} from "../../utils/helpers";
import CreateAccount from "./CreateAccount";
import Verification from "./Verification";
import CreatePassword from "./CreatePassword";

const SignUp = (props) => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [step, setStep] = useState('createAccount');
  const [path, setPath] = useState(['createAccount', 'verification', 'password']);
  const [registration, setRegistration] = useState({});

  const onSubmit = (data) => {
    console.log('onSubmit', data);
  };

  const nextStep = () => {
    console.log('nextStepLOG');
    const currentStep = path.indexOf(step);
    setStep(path[(currentStep != null && path[currentStep + 1] != null) ? (currentStep + 1) : currentStep]);
  }

  const prevStep = () => {
    const currentStep = path.indexOf(step);
    if (currentStep != null && path[currentStep - 1] != null) {
      setStep(path[currentStep - 1])
    } else {
      setStep(path[currentStep]);
    }
  };

  const renderRegistrationStep = () => {
    switch (step) {
      case 'createAccount':
        return <CreateAccount nextStep={nextStep}/>;
      case 'verification':
        return <Verification nextStep={nextStep} onStepChange={prevStep}/>;
      case 'password':
        return <CreatePassword nextStep={nextStep} onStepChange={prevStep}/>;

      default:
        return null
      // return <Loader className={styles.loading}/>;
    }
  }

  return (
    <div className={`container-login`}>
      <div className={`contentWrap-login`}>
        <div className={`contentBox-login`}>
            {renderRegistrationStep()}
        </div>
      </div>
    </div>
  )

  };

export default SignUp;
