import React, { FC } from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import WhyUs from '../components/Home/WhyUs';
import Reviews from '../components/Home/Reviews';
import Partners from '../components/Home/Partners';
import News from '../components/Home/News';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <Partners />
      <News />
    </>
  );
};

export default Home;
