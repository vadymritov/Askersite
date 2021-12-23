import React, {useState} from 'react';
import styles from './Input.module.scss'

const Input = ({inputStyles,
                 wrapStyle,
                 type,
                 children,
                 addPadding,
                 // control,
                 // rules,
                 defaultValue,
                 name,
                 disabled,
                 ...props}) => {
  const [isShow, setIsShow] = useState(false)
  // const {field} = useController({
  //   control,
  //   defaultValue: defaultValue || '',
  //   name,
  //   rules
  // })

  // console.log('custom', inputStyles, name, defaultValue);

  const handleChange = (event) => {
    console.log(event.target.value);
    if (props.onChange != null) {
      props.onChange(event);
    }

    if (props.name === 'email' ) {
      event.target.value = event.target.value.trim();
    }

    if (props?.register?.onChange) {
      props?.register.onChange(event);
    }
  }

  const changeShow = () => {
    setIsShow(prevState => !prevState);
  }


  // const renderError = () => {
  //   if (isError && errors && errorObj) {
  //     switch (errorObj.type) {
  //       case 'required':
  //         return <span className={cn(styles['error-message'], customErrorClass)}>{errorObj.message || 'Required field'}</span>;
  //       case 'validate':
  //         return <div className={cn(styles['error-message'], customErrorClass)}>{errorObj.message || 'Invalid format'}</div>;
  //       case 'maxLength':
  //         return <div className={cn(styles['error-message'], customErrorClass)}>{errorObj.message || 'Max length exceeded'}</div>;
  //       case 'minLength':
  //         return <div className={cn(styles['error-message'], customErrorClass)}>{errorObj.message || 'Incorrect amount of characters'}</div>;
  //       case 'pattern':
  //         return <div className={cn(styles['error-message'], customErrorClass)}>{errorObj.message || 'Invalid format'}</div>;
  //       default:
  //         return null;
  //     }
  //   }
  //
  //   return null;
  // };


  return (
    <div className={`${wrapStyle ? wrapStyle : ''} ${addPadding != null ? styles.addPading : ''} ${styles.Input}`}>
      <div className={styles.iconBox}>{children}</div>
      <input
        role={'input'}
        {...props}
        name={name}
        className={`${styles.Input} ${inputStyles ? inputStyles : ''}`}
        type={type === 'password' && isShow ? 'text' : type}
        onClick={props.onClick}
        onChange={handleChange}
        disabled={disabled}
      />
      {type === 'password' ?
        <button type='button' className={styles.showText} onClick={changeShow}>{!isShow ? 'Show' : "Hide"}</button>
        : null}
    </div>
  )
};

export default Input;
