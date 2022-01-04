import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu'
import styles from './BurgerHeader.module.scss'
import Logo from "../UI/icons/Logo";
import {NavLink} from "react-router-dom";
import {ReactComponent as BurgerMenu} from '../../image/svg/burger-menu.svg';


const BurgerHeader = (props) => {
  const [isOpen, setOpen] = useState(false)
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


  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <Menu {...props} height={'100%'}  className={styles.burgerMenu} isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}  >
      <div className={styles.containerBurgerMenu} >
        <div className={styles.tabBoxBurgerMenu} >
          {
            blockLinks.map((link, index) =>
              <NavLink key={index} className={styles.linkWrapBurgerMenu} to={link.href} activeclassname={styles.active} onClick={()=>closeSideBar()} >
                <span className={styles.itemLinkBurgerMenu}>{link.text}</span>
              </NavLink>
            )
          }
          <NavLink className={styles.joinWrapBurgerMenu} to={'/sign-up'} onClick={()=>closeSideBar()} activeclassname={styles.active} >
            <span className={styles.joinLinkBurgerMenu}>Join</span>
          </NavLink>
        </div>
        <div>

        </div>
      </div>

    </Menu>
  )
};

export default BurgerHeader;
