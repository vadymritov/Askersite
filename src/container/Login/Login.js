import React, { useEffect, useRef } from "react";
import styles from "./Login.module.scss";
import QuestionLogin from "../../components/UI/icons/QuestionLogin";
import LogoWhite from "../../components/UI/icons/LogoWhite";
import ArrowBack from "../../components/UI/icons/ArrowBack";
import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input/Input";
import EmailIcon from "../../components/UI/icons/EmailIcon";
import LockIcon from "../../components/UI/icons/LockIcon";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import LinePhone from "../../components/UI/icons/LinePhone";
import { regexEmail } from "../../utils/helpers";
import { http } from "../../http/http";
import HomeStart from "../Home/HomeStart";
import CheckIcon from "../../components/UI/icons/CheckIcon";

const Login = (props) => {
  const handleFocus = (e) => {
    e.target.parentNode.classList.add("myClass");
    let val = document.querySelector(".myClass");
    try {
      val.children[0].children[1].style.backgroundColor = "#00D9CD";
    } catch (err) {
      console.log(err);
    }
  };
  const handlePwdFocus = (e) => {
    e.target.parentNode.classList.add("myPwdClass");
    let val = document.querySelector(".myPwdClass");
    try {
      val.children[0].children[0].style.backgroundColor = "#00D9CD";
    } catch (err) {
      console.log(err);
    }
  };
  const handleBlur = (e) => {
    let pwdVal = document.querySelector(".myPwdClass");
    if (e.target.type === "password") {
      pwdVal.children[0].children[0].style.backgroundColor = "#c7cdfb";
    }
    let val = document.querySelector(".myClass");
    val.children[0].children[1].style.backgroundColor = "#c7cdfb";
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const onSubmit = (data) => {
    const form = new FormData();
    form.append("email", data.email);
    form.append("password", data.password);

    navigate("/dashboard"); // added code

    http
      .post("loginEmail", form)
      .then((resp) => resp.data)
      .then((respJson) => {
        localStorage.setItem("UserProfile", respJson.status);
        console.log("login details", respJson);
        if (respJson.status === true) {
          localStorage.setItem("UserID", respJson.user.id);
          localStorage.setItem("User", JSON.stringify(respJson.user));
          // dispatch(setUserProfile(respJson));
          // navigate('/dashboard');
          cardRef?.current?.classList.add("start-rotate");
          setTimeout(() => {
            navigate("/dashboard", {
              state: {
                from: "login",
              },
            });
          }, 200);
        } else {
          alert(respJson.message);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <div className={`container-login`}>
        <div ref={cardRef} className={`contentWrap-login`}>
          <div className={`contentBox-login`}>
            <div className={`fade-in ${styles.content}`}>
              <button type="button" className={styles.arrowBtnWrap}>
                <NavLink to="/">
                  <ArrowBack className={styles.arrowBack} />
                </NavLink>
              </button>
              <div className={styles.logoBox}>
                <QuestionLogin className={styles.questionIcon} />
                <LogoWhite className={styles.logo} />
              </div>
              <form
                className={styles.loginForm}
                onSubmit={handleSubmit(onSubmit, (err) => {
                  console.log("error", err);
                })}
              >
                <div className={styles.title}>Log in</div>
                <div className={styles.text}>Enter your login details.</div>
                <div className={styles.inputBox} onBlur={handleBlur}>
                  <Input
                    name="email"
                    type="email"
                    errors={errors}
                    placeholder="Email"
                    register={register("email", {
                      required: true,
                      maxLength: 255,
                      pattern: regexEmail,
                    })}
                    addPadding={true}
                    onFocus={handleFocus}
                  >
                    <EmailIcon className={styles.emailIcon} />
                    <CheckIcon className={styles.CheckIcon} />
                  </Input>
                  <Input
                    name="password"
                    type="password"
                    errors={errors}
                    placeholder="Password"
                    register={register("password", {
                      required: true,
                      maxLength: 255,
                    })}
                    onFocus={handlePwdFocus}
                  >
                    <CheckIcon className={styles.CheckIcon} />
                    <LockIcon className={styles.lockIcon} />
                  </Input>
                </div>
                <NavLink
                  to={"/"}
                  className={`${styles.text} ${styles.paddingTop}`}
                >
                  No account?
                </NavLink>
                <NavLink
                  to={"/sign-up"}
                  className={`${styles.title} ${styles.greenText}`}
                >
                  JOIN ASKER
                </NavLink>
                <div className={`${styles.buttonBox}`}>
                  <button type="submit" className={`continue-btn`}>
                    <span>Continue</span>
                    <ArrowBtn className={styles.arrowBtn} />
                  </button>
                  <LinePhone className={styles.linePhone} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
