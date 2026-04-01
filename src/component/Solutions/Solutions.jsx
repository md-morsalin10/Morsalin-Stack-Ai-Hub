import React from 'react';
import cubeHelix from '../../assets/cube-helix 1.png'
import cube from '../../assets/cube.png'

const Solutions = () => {
    return (
        <div className='max-w-6xl mx-auto space-y-5 py-28'>
            <div className='text-center max-w-2xl mx-auto'>
                <h2 className='text-6xl font-bold bg-linear-to-b from-[#000000] to-[#011354] bg-clip-text text-transparent py-5'>Smart Solutions for Digital Creators</h2>
                <p className='text-[#010D3E] text-lg'>Access the world's most powerful AI and design tools in one place. <br />Mors-Stack AI helps you organize, discover, and build faster than ever before.</p>
            </div>

            <div className='max-w-4xl mx-auto grid grid-cols-2 gap-10 p-5'>
                <div className='p-5 rounded-2xl shadow-2xl border border-zinc-200'>
                    <div className='flex justify-center items-center m-6'>
                        <img src={cubeHelix} alt="" />
                    </div>
                    <div className='flex flex-col justify-center text-center items-center'>
                        <h2 className='text-2xl font-bold bg-linear-to-b from-[#000000] to-[#011354] bg-clip-text text-transparent pb-5'>Integrated AI Suite</h2>
                        <p className='text-[16px] py-1.5 px-5 font-medium text-[#010D3E]'>Seamlessly connect with top-tier AI models like ChatGPT, Claude, and Midjourney to enhance your creative output.</p>
                    </div>
                </div>

                <div className='p-5 rounded-2xl shadow-2xl border border-zinc-200'>
                    <div className='flex justify-center items-center m-6'>
                        <img src={cube} alt="" />
                    </div>
                    <div className='flex flex-col justify-center text-center items-center'>
                        <h2 className='text-2xl font-bold bg-linear-to-b from-[#000000] to-[#011354] bg-clip-text text-transparent pb-5'>Design at Your Fingertips</h2>
                        <p className='text-[16px] py-1.5 px-5 font-medium text-[#010D3E]'>Explore professional design tools like Figma, Canva, and Adobe Suite, curated specifically for modern developers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;