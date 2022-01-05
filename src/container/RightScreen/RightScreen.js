import React, {useEffect, useRef} from 'react';
import styles from './RightScreen.module.scss';
import Typed from "typed.js";
import Header from "../../components/Header/Header";
import {ReactComponent as QuestionGreen}  from '../../image/svg/QuestionGreen.svg';
import {ReactComponent as QuestionViolet}  from '../../image/svg/QuestionViolet.svg';

const RightScreen = (props) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Tell me about <br/> yourself in <br/> <span class="activeTyped">30 seconds</span>',
        'Tell me what <br/> makes you <span class="activeTyped">perfect</span> <br/> for this role',
        'Tell me what <br/> makes you <br/> <span class="activeTyped">unique</span>',
        'Tell me about <br/> your <span class="activeTyped">strengths</span> <span class="use-and">and</span> <br/> <span class="activeTyped">weaknesses</span>',
        'Tell me what <br/> you most enjoy <br/> about <span class="activeTyped">work</span>',
        '<span class="activeTyped">Tell me</span> what <br/> makes you a <br/> great flatmate',
        'Tell me about <br/> your relevant <br/> <span class="activeTyped">experience</span>',
        'Tell me what <br/> makes you a <br/> great <span class="activeTyped">candidate</span>',
      ],
      startDelay: 1000,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.rightContainer}>
      <div className={styles.homeWrap}>
      <Header />
      </div>
      <div className={styles.rightContent}>
        <QuestionGreen className={styles.greenIcon}/>
        <div className={styles.tellmeContent}>
          <div className={styles.typedTextWrap}>
            <h2>
              <span className={styles.typedText} id="tellMeTyped" ref={el}/>
            </h2>
          </div>
          <div className={styles.btnLine}>
            <button type="button" className={styles.btnCreate}>Create Asker</button>
          </div>
          <div className={styles.wrapIcon}>
          <QuestionViolet className={styles.violetIcon}/>
          </div>
        </div>
        <div className={styles.linkBlock}>
          <button type="button" className={`${styles.iconLink} ${styles.appStore}`}/>
          <button type="button" className={`${styles.iconLink} ${styles.googlePay}`}/>
        </div>
      </div>
    </div>
  );
};

export default RightScreen;
