import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';

const Carts = ({ cart,setCarts,carts }) => {
    const { name, price, icon, description, period } = cart;

    const handleDlt =(cart) =>{
        const filterCarts = carts.filter((item)=> item.id !==cart.id);
        setCarts(filterCarts) 
    }

    return (
        <div className='flex text-white justify-between my-3 items-center border p-5 rounded-2xl  bg-linear-to-b from-[#1303f3fd] to-[#cf15e7]'>
            <div className='flex justify-center items-center gap-2'>
                <div className='h-20 flex justify-center items-center'>
                    <img className='object-contain h-15 w-15' src={icon} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-white'>{name}</h1>
                    <p className='text-[14px] text-white'>{description}</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div className=''>
                    <h2 className='text-3xl font-bold'>${price}</h2>
                    <p className='text-[14px] '>{period}</p>
                </div>
                <div>
                    <button onClick={()=>handleDlt(cart)} className='bg-red-600 p-1 rounded-lg'><RiDeleteBinFill /></button>
                </div>
            </div>
        </div>
    );
};

export default Carts;