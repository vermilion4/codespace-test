import React from 'react';
import { socials } from '../data/socials';

const Footer = () => {
  return (
    <div className='pt-8 px-7 pb-10 font-dm-sans'>
      <hr className='mt-8 mb-[50px] border-2 border-dashed border-[#D1D1D2]' />
      <div className='flex flex-col sm:flex-row items-center justify-between space-y-5 lg:space-y-0 text-subdued-light'>
        <div className='text-center sm:text-start space-y-5'>
          <p className='font-medium text-lg'>&copy; 2023 Code Space Africa.</p>
          <p className='sm:w-[80%]'>
            Code Space Africa is a registered non-profit organization dedicated
            to empowering and celebrating genz in technology across Africa
          </p>
        </div>
        <div className='flex flex-col items-center space-y-5'>

          {/* Logo */}
          <img src='/icons/logo.svg' alt='logo' className='w-28 h-[21px]' />

          {/* Socials */}
          <div className='flex space-x-[20.53px]'>
            {socials.map(({ id, icon, social_link }) => (
              <a
                key={id}
                href={social_link}
                target='_blank'
                className='bg-[#F7F7F7] rounded-full w-[47px] h-[47px] grid place-content-center relative hover:cursor-pointer hover:scale-110 transition-all'>
                <img
                  src={icon}
                  alt={id}
                  className='w-[37px] h-[37px] absolute top-[0.32rem] left-[0.32rem]'
                />
                <img
                  src={'/icons/overlay.svg'}
                  alt={id}
                  className='w-[24px] h-[24px] '
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
