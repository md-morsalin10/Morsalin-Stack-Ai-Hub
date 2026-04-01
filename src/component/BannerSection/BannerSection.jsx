import React from 'react';
import bannerImg from '../../assets/Visual.png'
import cylinder from '../../assets/cylinder1.png'
import half from '../../assets/half-torus.png'
import { IoMdArrowForward } from 'react-icons/io';

const BannerSection = () => {
    return (
        <div className='max-w-7xl mx-auto pb-8 relative overflow-hidden'>
            <div className='flex-col-reverse md:flex-row bg-linear-to-b from-[#EAEEFE] to-[#183EC2] pl-11 flex'>
                <div className='flex justify-center py-10 md:py-30'>
                    <div className="content flex flex-col  space-y-8">
                        <div className='border bg-transparent hover:bg-[#EAEEFE] border-[#183EC2] w-32 py-1 text-center rounded-2xl'>
                            <p className='text-pink-600 text-[14px]'>New era Begins</p>
                        </div>
                        <div>
                            <h2 className='text-4xl md:text-7xl font-bold tracking-tighter bg-linear-to-b from-[#000000] to-[#011354] bg-clip-text text-transparent md:py-4 space-y-2'>The Ultimate Stack <br /> for Creative Minds.</h2>
                        </div>
                        <div>
                            <p className='text-[#010D3E] md:text-xl'>From advanced vector design to high-fidelity AI generation <br /> find everything you need to build  the future, all in one seamless platform.</p>
                        </div>

                        <div>
                            <button className='btn bg-black text-white  border-none mr-3'>Get for free</button>
                            <button className='btn bg-transparent hover:bg-linear-to-r from-[#7000FF] to-[#AD00FF]border-white hover:text-white text-[#000000]'>Learn more <IoMdArrowForward /></button>
                        </div>
                    </div>
                    <div className='absolute left-140 hidden lg:block top-4 animate-smooth-float'>
                        <img src={cylinder} alt="" />
                    </div>

                </div>
                <div className="image animate-smooth-float pt-5 md:pt-0 [animation-duration:6s]">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
            <div className='absolute top-110 right-0 hidden lg:block animate-smooth-float [animation-duration:4s] [animation-delay:1s]'>
                <img src={half} alt="" />
            </div>
        </div>
    );
};

export default BannerSection;