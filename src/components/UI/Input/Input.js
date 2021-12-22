import React from 'react';
import styles from './Input.module.scss'
import QuestionSmall from "../icons/QuestionSmall";

const Input = ({customStyle, type, children, ...props}) => {

  console.log('custom', customStyle);

  const handleChange = (event) => {
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

  const computedProps = {
    type: type,
    value: props.value,
    onChange: props.handleChange,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    name: props.name,
    id: props.name,
    placeholder: props.placeholder,
    maxLength: props.maxLength,
    minLength: props.minLength,
    onClick: props.onClick,
    disabled: props.disabled,
    defaultValue: props.defaultValue,
    autoComplete: props?.autoComplete,
    readOnly: props?.readonly,
    ref: props.register?.ref
  }

  return (
    <div className={`${customStyle ? customStyle : ''} ${props.addPadding != null ? styles.addPading : ''} ${styles.Input}`}>
      <div className={styles.iconBox}>{children}</div>
      <input type={type} {...computedProps}/>
    </div>
  )
};

export default Input;
