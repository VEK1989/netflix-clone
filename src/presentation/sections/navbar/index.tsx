import React from 'react';
import cn from 'classnames'

import style from './navbar.module.scss';

export const Navbar = () => {
  return (
    <header className={cn(style.nav, style.nav__black)}>
      <div className={style.nav__content}>
        <img className={style.nav__logo} src='images/logo.png' alt="logo"/>
        <img className={style.nav__avatar} src='images/avatar.png' alt="avatar"/>
      </div>
    </header>
  );
};
