import React from 'react'
import { FaPlus } from "react-icons/fa";

const ProductCard = ({item}) => {
    console.log(item)
  return (
    <div className='product-card border shadow p-3 hover:scale-[1.02] rounded-lg transition duration-300 hover:bg-red-100 cursor-pointer'>
  <div className='flex flex-col justify-between'>
    <div className='flex flex-col justify-between'>
        <h1 className='text-xl font-semibold'>{item.title} </h1>
        <p className='text-gray-500'>{item.desc} </p>
    </div>
    <p className='text-lg font-semibold'>{item.price} </p>
  </div>
  <div className='relative w-[115px] h-[115px] '>
    <img src={item.photo} className='rounded-md object-cover w-full h-full'  />
    <button className='absolute end-2 bottom-2 bg-white rounded-full
     hover:bg-red-100 w-8 h-8 grid place-items-center'>
        4<FaPlus />
        </button>
  </div>
    </div>
  )
}

export default ProductCard
