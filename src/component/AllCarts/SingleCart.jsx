import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


const SingleCart = ({ card, setCarts, carts }) => {
    // console.log(card);
    const [clicked, setClicked] = useState(false)
    const handleSubcribedbtn = (card) =>{
        setCarts([...carts, card])
        setClicked(true)
    }

    const { icon, name, description, price, period, features, tag } = card;

    return (
        <div className='grow shadow-xl  border border-gray-300 rounded-2xl relative overflow-hidden'>
            <div className='flex justify-center items-center  h-50 rounded-t-2xl bg-zinc-200 overflow-hidden'>
                <img className='object-contain h-38 w-38 ' src={icon} alt="" />
            </div>
            <div className='p-4 space-y-3 flex flex-col grow'>
                <div className='flex flex-col grow'>
                    <h2 className='text-2xl font-bold bg-linear-to-b from-[#170cb8b0] to-[#cf15e7] bg-clip-text text-transparent'>{name}</h2>
                    <p className='text-gray-500'>{description}</p>
                </div>
                <div className='flex items-end'>
                    <h2 className={`text-4xl font-bold ${price >= 50 ? 'text-red-500' : 'bg-linear-to-b from-[#000000] to-[#011354] bg-clip-text text-transparent'}`}>${price}</h2>
                    <p className='text-gray-500'>/{period}</p>
                </div>
                <div>
                    {features.map((feature , ind)=> <p key={ind} className='flex  items-center gap-1 text-gray-500 py-1'><IoMdCheckmarkCircleOutline size={22} className='text-green-500' /> {feature}</p>)}
                </div>
            </div>
            <div className='px-5 flex-1 pb-4'>
                <button 
                onClick={()=>handleSubcribedbtn(card)}
                className={`btn w-full   text-white rounded-3xl py-6 ${clicked ? 'bg-green-600' : 'bg-linear-to-r from-[#7000FF] to-[#AD00FF]'}`}>{clicked ? 'Subscribed' : 'Subscibe Now'}</button>
            </div>

            <div className='absolute top-2 right-2'>
                <p className={`rounded-2xl py-1 px-2 ${tag?.toLowerCase() == "popular" ? 'bg-purple-300 text-purple-600' : tag?.toLowerCase() === "most popular" ? 'bg-red-300 text-red-600' : tag?.toLowerCase() === "new" ? 'bg-green-300 text-green-600' : tag?.toLowerCase() === "trending" ? 'bg-pink-300 text-pink-600' : tag?.toLowerCase() === "top choice" ? 'bg-blue-300 text-blue-600' : tag?.toLowerCase() == "classic" ? 'bg-gray-300 text-gray-600' : 'bg-amber-200 text-amber-600'}`}>{tag}</p>
            </div>

        </div>
    );
};

export default SingleCart;