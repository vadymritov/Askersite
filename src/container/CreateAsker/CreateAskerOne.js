import React, {useRef, useState} from 'react';
import styles from "./CreateAsker.module.scss";
import CreateAskerIcon from "../../components/UI/icons/Create/CreateAskerIcon";
import EditCreateBtn from "../../components/UI/icons/Create/EditCreateBtn";
import ArrowBtn from "../../components/UI/icons/ArrowBtn";
import CheckIcon from "../../components/UI/icons/Create/CheckIcon";
import PlusIcon from "../../components/UI/icons/Create/PlusIcon";

const CreateAskerOne = ({...props}) => {
  const elRef = useRef();

  const handleContinue = () => {
    // request axios

  };

  const removeEffect = () => {
    props.setCurrentAsker(asker)
    elRef.current?.classList.add("ease-out-effect")
    const timer = setTimeout(() => {
      props.nextStep()
    }, 300);
    return timer;



  };
  const [asker,setAsker] =useState({
    name:'',
    description:''
  })
  // console.log(asker)
  // const [nameAsker,setNameAsker] =useState('')
  // const [description,setDescription] =useState('')
  const handleChange = e => {
    const { name, value } = e.target;
    setAsker(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div ref={elRef} className={` ease-in-effect ${styles.createContainer}`}>
      <div className={styles.contantWrap}>
        <div className={` ${styles.questionBlock}`}>
          <CreateAskerIcon className={styles.createLogo}/>
          <div className={styles.questionBox}>
            <div className={`${styles.questionItem} ${styles.questionItemSolid}`}>
              <div className={styles.textBox}>
                <label className={styles.title}>Who’s Asking?</label>
                {/*<span className={styles.text}>e.g Recruitment Agency</span>*/}
                <input name='name'  placeholder='e.g Recruitment Agency' onChange={handleChange}/>
              </div>
              <div className={`${styles.iconWrap}`}>
                <EditCreateBtn className={styles.editIcon}/>
              </div>
            </div>

            <div className={`${styles.questionItem} ${styles.questionItemDash}`}>
              <div className={styles.textBox}>
                <label className={styles.title}>What’s it About?</label>
                {/*<span className={styles.text}>e.g Questions for Candidates</span>*/}
                <input name='description' placeholder='e.g Questions for Candidates' onChange={handleChange}/>
              </div>
              <div className={`${styles.iconWrap} ${styles.iconWrapCheck}`}>
                <CheckIcon className={styles.checkIcon}/>
              </div>
            </div>
          </div>
        </div>
        <div className={`button-box ${styles.buttonBox}`}>
          <button type="button" className={`continue-btn  ${styles.buttonStyle}`}  onClick={removeEffect}>
            <span>ADD QUESTIONS</span>
            <div className={styles.plusIconBox}>
              <PlusIcon className={` ${styles.plusIcon}`}/>
            </div>
          </button>
        </div>
        <div className={styles.rotate}>
          <div className="triangle-white"/>
        </div>
      </div>
    </div>
  )
};

export default CreateAskerOne;
