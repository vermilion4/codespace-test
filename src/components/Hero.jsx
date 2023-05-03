import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <div className='bg-hero-bg min-h-screen relative bg-no-repeat bg-center bg-cover dark:text-white'>
      <Header />
      <div className='h-[calc(100vh-100px)] flex flex-col justify-center text-center items-center'>
        <h1 className='text-4xl md:text-5xl lg:text-[64px] font-semibold w-[80%] lg:w-1/2 leading-[42px] lg:leading-[83px] mb-4'>
          Connect with <span className='text-primary'>GenZ-s</span> in tech
          across <span className='text-primary'>Africa</span>
        </h1>
        <p className='text-xl lg:text-2xl text-subdued mb-[37px] lg:mb-16 font-dm-sans'>
          we are coming soon 🚧🚧
        </p>
        <button className='bg-primary text-white font-semibold text-base lg:text-2xl rounded-[25px] px-[18px] py-[14.5px] md:px-8 md:py-4 lg:px-[67px] lg:py-[23px] hover:scale-110 transition-all'>
          Join the Community
        </button>
      </div>
      <img
        src='/images/arrow.png'
        alt='arrow'
        className='absolute bottom-5 w-[250px] sm:bottom-2 sm:-left-2 md:w-[282px] -left-20 md:-left-9'
      />
    </div>
  );
};

export default Hero;
