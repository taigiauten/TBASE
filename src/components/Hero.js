import React from 'react';
import men from '../img/men.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className=' h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div> Thời trang đón xuân 2023
          </div>

          <h1 className='text-[70px] leading-[1-1] font-light mb-4'>STYLE OF ME <br />
            <span className='font-semibold'>Nam/Nữ</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Giảm giá</Link>
        </div>
        <div className='hidden lg:block'>
          <img src={men} alt="" className='w-[300px]' />
        </div>
      </div>
    </section>
  )
};

export default Hero;
