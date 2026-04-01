

const TabSection = ({ tabActive, setTabActive, carts }) => {


    const handleTabBtn = (category) => {
        setTabActive(category)
    }
    return (

        <div className='flex justify-center pt-20 py-10'>
            {/* name of each tab group should be unique */}
            <div className="tabs gap-2 bg-transparent tabs-box">
                <div>
                    <input
                        onClick={() => handleTabBtn('All')}
                        type="radio"
                        name="my_tabs_1"
                        className={`tab w-20 md:w-35 rounded-2xl ${tabActive === "All" && 'bg-linear-to-r from-[#170cb8] to-[#cf15e7] text-white'}`}
                        aria-label="All" />

                    <input
                        type="radio"
                        onClick={() => handleTabBtn('ai')}
                        name="my_tabs_1"
                        className={`tab  w-20 md:w-35 rounded-2xl ${tabActive === "ai" && 'bg-linear-to-r from-[#170cb8] to-[#cf15e7] text-white'}`}
                        aria-label="Ai Tools" />

                    <input
                        onClick={() => handleTabBtn('design')}
                        type="radio"
                        name="my_tabs_1"
                        className={`tab w-20 md:w-35 rounded-2xl ${tabActive === "design" && 'bg-linear-to-r from-[#170cb8] to-[#cf15e7] text-white'}`}
                        aria-label="Design Tools" />

                    <input
                        onClick={() => handleTabBtn('cart')}
                        type="radio"
                        name="my_tabs_1"
                        className={`tab w-20 md:w-35 rounded-2xl ${tabActive === "cart" && 'bg-linear-to-r from-[#7000FF] to-[#AD00FF] text-white'}`}
                        aria-label={`Cars (${carts.length})`} />
                </div>

            </div>
        </div>
    );
};

export default TabSection;