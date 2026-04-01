import React from 'react';

const Ratting = () => {
    return (
        <div className='bg-linear-to-l from-[#d854e4e0] to-[#183EC2] mt-10 max-w-7xl mx-auto'>
            <div className='py-15 grid grid-cols-3'>
                <div className='flex flex-col justify-center items-center  lg:py-0 lg:border-r border-white/20'>
                    <h2 className='text-4xl md:text-6xl font-bold text-white'>80K+</h2>
                    <p className='text-white'>Users</p>
                </div>
                <div className='flex flex-col justify-center items-center lg:py-0 lg:border-r border-white/20'>
                    <h2 className='text-4xl md:text-6xl font-bold text-white'>500+</h2>
                    <p className='text-white'>Tools</p>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <h2 className='text-4xl md:text-6xl font-bold text-white'>5.00</h2>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Ratting;