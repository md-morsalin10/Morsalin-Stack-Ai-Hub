import React, { use } from 'react';
import SingleCart from './SingleCart';

const AllCarts = ({ dataPromise, tabActive, setCarts, carts }) => {
    const cartsData = use(dataPromise)

    const filteredCarts = tabActive === "All" ? cartsData : cartsData.filter(card => card.category === tabActive);

    return (
        <div className='max-w-6xl mx-auto space-y-6'>
            {tabActive === 'All' ? <h2 className='text-2xl font-bold text-center'> All Tools </h2> : tabActive === 'ai' ? <h2 className='text-2xl font-bold text-center'>Ai Tools</h2> : tabActive === 'design' ?  <h2 className='text-2xl font-bold text-center'>Design Tools</h2> : ''}
            {/* all card */}
            <div className='grid grid-cols-1 md:grid-cols-3 p-8 md:p-1 gap-7'>
                {
                    filteredCarts.map(card => <SingleCart carts={carts} setCarts={setCarts} key={card.id} card={card}></SingleCart>)
                }
            </div>

        </div>
    );
};

export default AllCarts;