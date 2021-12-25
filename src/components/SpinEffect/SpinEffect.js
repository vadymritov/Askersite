import React, {useState} from 'react';
import logo from "../../image/svg/QuestionTop.svg";

const SpinEffect = (props) => {
  const [isActive, setActive] = useState(false);
  // const isActive = false

  const onchange = (e, type) => {
    e.preventDefault()
    console.log('onCli', type);
    if (type === 'front') {
      setActive(false)
    } else {
      setActive(true)
    }

    // e.stopPropagation()
  }

  return (
    <>

      <div className="note">Click anywhere to flip</div>

      <div className="container">
        <div className={`card card--front ${!isActive ? 'card--front--flip' : ''}`} onClick={(e) => onchange(e, 'front')}>
          <div className="logo">
            <svg className="logo__img">
              <img
                src={logo}
              />
            </svg>
          </div>
          <div className="text">
            <header className="head">
              <h1 className="head__name">
                <b className="name__fn">Keith</b>
                Pickering
              </h1>
              <p className="head__subtitle">Front-end Web<br/> Developer</p>
            </header>
          </div>
        </div>

        <div className={`card card--back ${!isActive ? 'card--back--flip' : ''}`} onClick={(e) => onchange(e, 'back')}>
          <div className="card__content">
            <ul className="contact">
              <li><a href="https://keithpickering.github.io">keithpickering.github.io</a></li>
              <li><a href="https://facebook.com/keithpickeringdesign">facebook.com/keithpickeringdesign</a></li>
              <li><a href="https://twitter.com/thatkeithdude">twitter.com/thatkeithdude</a></li>
              <li><a href="https://codepen.io/keithpickering">codepen.io/keithpickering</a></li>
            </ul>
          </div>
        </div>

        <div className="card-shadow"/>

      </div>
    </>
  )
};

export default SpinEffect;
