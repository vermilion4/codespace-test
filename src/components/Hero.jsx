import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <div className='bg-hero-bg min-h-screen relative bg-no-repeat bg-center bg-cover overflow-hidden '>
      <Header />
      <div className='h-[calc(100vh-170px)] md:h-[calc(100vh-100px)] flex flex-col justify-center text-center items-center'>
        <h1 className='text-4xl md:text-5xl lg:text-[64px] font-semibold w-[90%] xl:w-1/2 leading-[42px] lg:leading-[83px] mb-4'>
          
          Connect with <span className='text-primary color-slide bounce-delayed'>GenZ-s</span> in tech
          across <span className='text-primary color-slide'>Africa</span>
        </h1>
        <p className='text-xl lg:text-2xl text-subdued mb-[37px] lg:mb-16 font-dm-sans'>
          we are coming soon 🚧🚧
        </p>
        <button className='bg-primary text-white font-semibold text-base lg:text-2xl rounded-[25px] px-[18px] py-[14.5px] md:px-8 md:py-4 lg:px-[67px] lg:py-[23px] hover:scale-110 transition-all md:mb-32'>
          <a href='https://forms.gle/csVUQEScZpiK9WzE8' target='_blank' rel="noreferrer">Join the Community</a>
        </button>
      </div>
      <img
        src='/icons/arrow.svg'
        alt='arrow'
        className='absolute bottom-5 md:bottom-0 rotate-12 md:w-[202px] '
      />
    </div>
  );
};

export default Hero;
