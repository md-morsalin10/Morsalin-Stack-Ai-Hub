import React from 'react';
import Carts from './Carts';
import { Bounce, toast } from 'react-toastify';

const CartsSection = ({ carts, setCarts }) => {
    console.log(carts);

    const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0)
    const handlePayment = () => {
        setCarts([])
          toast.success(`Total $${totalPrice} Payment Successful`, {
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
        <div className='py-10 border max-w-7xl mx-auto m-5 rounded-2xl  p-6 md:p-5 border-fuchsia-100 bg-base-200 '>
            {carts.length === 0 &&
                <div className='flex justify-center items-center border-gray-300 h-52 rounded-2xl p-5 bg-base-300 border max-w-4xl mx-auto'>
                    <p className='font-bold text-2xl'> No Carts Available </p>
                </div>}

            {carts.length > 0 &&
                <h2 className='text-center py-5 text-2xl font-bold'>Your Selected Carts</h2>
            }
            <div className='max-w-6xl mx-auto '>
                {
                    carts.map((cart, ind) => <Carts setCarts={setCarts} carts={carts} cart={cart} key={ind}></Carts>)
                }
            </div>

            {carts.length > 0 &&
                <div className='divider px-18'>
                </div>
            }

            {carts.length > 0 &&
                <div className='max-w-6xl mx-auto flex text-white justify-between my-5 lg:my-8 items-center border p-6 rounded-2xl  bg-linear-to-b from-[#1303f3fd] to-[#1f12d4]'>
                    <div>
                        <h2 className='text-4xl font-bold'>Total</h2>
                    </div>
                    <div className=''>
                        <h2 className='text-4xl font-bold max-w-6xl mx-auto flex text-white justify-between my-5 lg:my-8 items-center border p-3 rounded-2xl bg-linear-to-b from-[#1303f3fd] to-[#1f12d4] shadow-lg transition-all duration-500 hover:shadow-blue-500/30 hover:-translate-y-1'>${totalPrice}</h2>
                    </div>
                </div>
            }

            {carts.length > 0 &&
                <div onClick={handlePayment} className='max-w-6xl mx-auto text-white my-5 text-center border p-6 rounded-2xl bg-green-600 cursor-pointer transition-all duration-300 hover:bg-green-700 hover:shadow-xl active:scale-95 group'>
                    <button className='text-2xl font-bold '>Click To Payment</button>
                </div>
            }
        </div>
    );
}; 2

export default CartsSection;