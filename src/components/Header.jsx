import React from 'react';

const Header = () => {
  return (
    <div className='h-28 flex justify-between items-center pl-7 lg:pl-[102px] overflow-hidden'>
      <div className='logo text-[26px] font-black'>LOGO</div>
      <div className='menu'>
        <img src='/icons/menu.svg' alt='menu' className='w-36 relative -right-10 -top-4 animate-spin-slow' />
        {/* <img src='/icons/menu.svg' alt='menu' className='w-32 dark:hidden block' />
        <img src='/images/menu-dark.png' alt='menu' className='w-32 hidden dark:block' /> */}
      </div>
    </div>
  );
};

export default Header;
