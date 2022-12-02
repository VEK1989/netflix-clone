import React from 'react';
import {Banner} from 'src/presentation/components/banner';
import {Navbar} from 'src/presentation/sections/navbar';

import style from './home.module.scss';

export const Home = () => {
  return (
    <div className={style.home}>
      {/*Шапка главной страницы*/}
      <Navbar />

      {/*Баннер в верхней части сайта*/}
      <Banner />
    </div>
  );
};
