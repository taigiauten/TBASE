import React, { useContext } from 'react';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'
const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext)
  return <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* {image} */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
        </div>
      </div>
      {/* button */}
      <div className=' absolute top-4 group-hover:right-6 right-4 p-2 flex flex-col items-center justify-center gap-y-2 
      opacity-0 group-hover:opacity-100 text-white transition-all duration-300'>
        <button onClick={() => addToCart(product, id)}>
          <div className='flex justify-center text-white items-center w-12 h-12 bg-red-500'>
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill /></Link>
      </div>
    </div>
    {/* category va title  va price*/}

    <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>Danh mục: {category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-extrabold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>Giá: {price}$</div>
    </div>
  </div>;
};

export default Product;
