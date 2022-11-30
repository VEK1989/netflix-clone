import React from 'react';
import {Navbar} from 'presentation/sections/navbar';

import style from './home.module.scss';

export const Home = () => {
  return (
    <div className={style.home}>
      <Navbar />
    </div>
  );
};
