import React from 'react';

const Header = () => {
  return (
    <div className='h-20 flex justify-between items-center pl-7 lg:pl-[102px]'>
      <div className='logo text-[26px] font-black'>LOGO</div>
      <div className='menu'>
        <img src='/images/menu.png' alt='menu' className='w-32' />
      </div>
    </div>
  );
};

export default Header;
