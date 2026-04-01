import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingSection = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    
    
    return (
        <div>
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center max-w-5xl mx-auto py-20 px-5'>
                {
                    pricingData.map((priceCard, ind)=> <PricingCard key={ind} priceCard={priceCard} ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingSection;