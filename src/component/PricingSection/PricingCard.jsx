import React from 'react';

const PricingCard = ({ priceCard }) => {
    const { planName, price, period, features, buttonText, isPopular, tag,  } = priceCard;

    return (

        <div className={`relative p-8 rounded-3xl transition-all duration-500 flex flex-col w-full 
            ${planName === "Pro" ? "bg-linear-to-b from-[#7000FF] to-[#AD00FF] text-white md:scale-110 z-10 shadow-2xl border-none min-h-155" 
                : "bg-white hover:bg-zinc-200  text-black border border-zinc-200 min-h-137.5 shadow-sm"}
        `}>
            
            {/* "Most Popular" Tag */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#e11d48] to-[#2563eb] text-white text-[12px] font-bold px-4 py-1 rounded-full border border-white/20">{tag}</div>
                )}
 
            <div className="mb-8">
                <h3 className={`text-xl font-bold ${planName === "Pro" ? "text-zinc-400" : "text-zinc-500"}`}>
                    {planName}
                </h3>
                <div className="flex items-baseline mt-4">
                    <span className="text-5xl font-extrabold">${price}</span>
                    <span className="ml-1 text-zinc-500 font-medium">{period}</span>
                </div>
            </div>

            <button className={`
                btn btn-block mb-8 font-bold rounded-xl transition-all
                ${planName === "Pro" 
                    ? "bg-white text-black hover:bg-green-400 border-none" 
                    : "bg-black text-white hover:bg-zinc-200 hover:text-black border-black"}
            `}>
                {buttonText}
            </button>

            <div className="grow">
                <ul className="space-y-4">
                    {features.map((feature, ind) => (
                        <li key={ind} className="flex items-center gap-3 text-sm">
                            <span className={planName === "Pro" ? "text-white" : "text-green-500"}>✔</span>
                            <span className={planName === "Pro" ? "text-zinc-300" : "text-zinc-600"}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingCard;