import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Funds from '../../pages/Funds';
import Home from '../../pages/Home';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funds" element={<Funds />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
