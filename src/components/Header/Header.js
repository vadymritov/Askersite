import React from 'react';
import styles from './Header.module.scss'
import Logo from "../UI/icons/Logo";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  const blockLinks = [
    {
      href: '/',
      text: 'Inspiration'
    },
    {
      href: '/',
      text: 'Integration'
    },
    {
      href: '/',
      text: 'Support'
    },
    {
      href: '/log-in',
      text: 'Log In'
    },
  ]

  return (
    <div className={styles.container}>
      <NavLink to={'/'}><Logo className={styles.logo}/></NavLink>
      <div className={styles.tabBox}>
        {
          blockLinks.map((link, index) =>
            <NavLink key={index} className={styles.linkWrap} to={link.href} activeclassname={styles.active} >
            {/*<NavLink key={index} className={styles.linkWrap} exact to={link.href} activeclassname={styles.active} >*/}
              <span className={styles.itemLink}>{link.text}</span>
            </NavLink>
          )
        }

        <NavLink className={styles.joinWrap} to={'/sign-up'} activeclassname={styles.active} >
        {/*<NavLink className={styles.joinWrap} exact to={'/sign-up'} activeclassname={styles.active} >*/}
          <span className={styles.joinLink}>Join</span>
        </NavLink>

      </div>

    </div>
  )
};

export default Header;
