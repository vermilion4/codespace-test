import React from 'react';

const Header = () => {
  return (
    <div className='h-20 flex justify-between items-center pl-7 lg:pl-[102px]'>
      <div className='logo text-[26px] font-black dark:text-white'>LOGO</div>
      <div className='menu'>
        <img src='/images/menu.png' alt='menu' className='w-32 image-light' />
        <img src='/images/menu-dark.png' alt='menu' className='w-32 image-dark' />
      </div>
    </div>
  );
};

export default Header;
