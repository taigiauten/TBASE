import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsCart } from 'react-icons/bs'
import { SlLogin } from 'react-icons/sl'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  });
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed z-10 w-full transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <div className=''>
          <Link to={'/'}>
            <div className='flex items-center font-semibold uppercase text-[#332c54]'>
              <img src={Logo} className='w-[40px] ' alt="logo" />Base
            </div>
          </Link>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative ml-[85%]'>
          <BsCart className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] 
      text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
        <div className='cursor-pointer '>
          <SlLogin className='text-2xl' />
        </div>
      </div>
    </header>
  )
};

export default Header;
