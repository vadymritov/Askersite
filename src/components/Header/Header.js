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
      href: '/integration',
      text: 'Integration'
    },
    {
      href: '/support',
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
            <NavLink key={index} className={styles.linkWrap} exact to={link.href} activeClassName={styles.active} >
              <span className={styles.itemLink}>{link.text}</span>
            </NavLink>
          )
        }

        <NavLink className={styles.joinWrap} exact to={'/SignUp'} activeClassName={styles.active} >
          <span className={styles.joinLink}>Join</span>
        </NavLink>

      </div>

    </div>
  )
};

export default Header;
