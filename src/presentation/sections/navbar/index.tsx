import cn from 'classnames';
import React, {useCallback, useEffect} from 'react';
import {useToggle} from 'src/hooks/use_toggle';

import style from './navbar.module.scss';

export const Navbar = () => {
  const [isShow, setIsShow] = useToggle(false);

  const transitionNavbar = useCallback(() => {
    // Управляем видимостью заднего фона навбара при скролле.
    if (window.scrollY > 100) {
      setIsShow(true);

      return;
    }

    setIsShow(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <header className={cn(style.nav, isShow && style.nav__black)}>
      <div className={style.nav__content}>
        <img className={style.nav__logo} src="images/logo.png" alt="logo" />
        <img className={style.nav__avatar} src="images/avatar.png" alt="avatar" />
      </div>
    </header>
  );
};
