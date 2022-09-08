import React, { FC } from 'react';

import style from './title.module.scss';

type PropTypes = {
  title: string;
};

const Title: FC<PropTypes> = ({ title }) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
    </>
  );
};

export default Title;
