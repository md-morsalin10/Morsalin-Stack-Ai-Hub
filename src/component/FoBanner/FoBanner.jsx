import React from 'react';
import star from '../../assets/emojistar.png'
import helix from '../../assets/helix2.png'
import { IoMdArrowForward } from 'react-icons/io';

const FoBanner = () => {
    return (
        <div className='max-w-7xl mx-auto bg-linear-to-b from-[#FFFFFF] to-[#D2DCFF] flex items-center p-5  md:py-10 mt-2 md:mt-50'>
            <div>
                <img className='animate-smooth-float hidden md:block' src={star} alt="" />
            </div>
            <div className='flex justify-center items-center flex-col space-y-6'>
                <h2 className='text-3xl md:text-5xl font-semibold bg-linear-to-b  md:py-5 from-[#000000] to-[#001354] bg-clip-text text-transparent'>Sign up for free today</h2>
                <p className='text-center text-[#010D3E]'>Celebrate the joy of accomplishment with an app designed <br /> to track your progress and motivate your efforts.</p>

                <div>
                    <button className='btn bg-black text-white  border-none mr-3'>Get for free</button>
                    <button className='btn bg-transparent hover:bg-linear-to-r from-[#170cb8b0] to-[#cf15e7] border-white hover:text-white text-[#000000]'>Learn more <IoMdArrowForward /></button>
                </div>
            </div>
            <div>
                <img className='animate-smooth-float hidden md:block' src={helix} alt="" />
            </div>
        </div>
    );
};

export default FoBanner;