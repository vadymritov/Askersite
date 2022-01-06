import styles from './Loader.module.scss';
import {useEffect, useState} from "react";

const Loader = ({className, isActive, setIsActive}) => {

  const [count, setCount] = useState(3);

  useEffect(() => {
    if(isActive){
      const begin = setInterval(() => {
        console.log(count);
        setCount(prevState => {
          if(prevState === 0){
            setIsActive(false);
            setCount(3);
            clearInterval(begin);
          }
          return prevState - 1;
        });
      }, 1000)
      // clearInterval(begin);
    }
  }, [isActive])

  return(
    <div className={`${styles.loader} ${className} ${isActive ? styles.active : ''}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>{count}</span>
    </div>
  )
}

export default Loader;
