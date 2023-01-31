import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <p className='text-white text-center'>Coppyright &copy; TaiShop  {(new Date().getFullYear())}. All right reserved. </p>
      </div>
    </footer>
  )
};

export default Footer;
