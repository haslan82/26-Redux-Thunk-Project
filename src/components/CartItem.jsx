import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../redux/actions/basketAction';

const CartItem = ({item}) => {
    //console.log(item)
const  dispatch = useDispatch ()
const handleIncrease = () => {
  //console.log("tıklanıldı")
  dispatch(updateItem(item.id, item.amount + 1));
}

const handleDecrease = () => {
  //console.log( "tıklanıldı")
  item.amount > 1 ? dispatch(updateItem(item.id, item.amount - 1)):  dispatch(deleteItem(item.id)) ;
}

  return (
    <div className='flex gap-4 mb-10 rounded-lg p-4 '>
      <img src={item.photo}  className='w-[115px] rounded-lg '/>
      <div className='w-full flex flex-col justify-between'>
        <h3 className='text-xl font-semibold text-red-500'>{item.title}  </h3>
        <p className='text-gray-500'>{item.restaurantName} </p>

        <div className='flex justify-between items-center'>
            <p className='font-semibold'>{item.price} TL </p>
            <div className='border text-xl rounded-lg'>
      <button onClick={handleDecrease} className='p-3 text-red-500 hover: bg-red-100 rounden-xl'> {item.amount > 1 ? <FaMinus /> : <FaTrashCan /> } </button> 
               <span className='p-3'>{item.amount} </span>
               <button onClick={handleIncrease} className='p-3  text-red-500 rounded-xl hover: bg-red-100'>
                <FaPlus />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
