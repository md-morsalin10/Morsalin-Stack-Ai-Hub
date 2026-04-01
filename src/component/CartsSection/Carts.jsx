import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { Bounce, toast } from 'react-toastify';

const Carts = ({ cart,setCarts,carts }) => {
    const { name, price, icon, description, period } = cart;

    const handleDlt =(cart) =>{
        const filterCarts = carts.filter((item)=> item.id !==cart.id);
        setCarts(filterCarts)
          toast.error(`${name} - is Deleted`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Bounce,
        });
    }

    return (
        <div className='flex text-white justify-between my-3 items-center border p-5 rounded-2xl  bg-linear-to-b from-[#1303f3fd] to-[#cf15e7] transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:brightness-110 cursor-pointer'>
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
                    <button onClick={()=>handleDlt(cart)} className='bg-red-600 p-1 rounded-lg transition-transform duration-300 hover:scale-125 hover:rotate-12 active:text-red-800'><RiDeleteBinFill /></button>
                </div>
            </div>
        </div>
    );
};

export default Carts;