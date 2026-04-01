

const TabSection = ({tabActive, setTabActive}) => {
    

    const handleTabBtn= (category) => {
        setTabActive(category) 
    } 
    return (

        <div className='flex justify-center pt-20 py-10'>
            {/* name of each tab group should be unique */}
            <div className="tabs gap-2 bg-transparent tabs-box">
                <input
                 onClick={()=> handleTabBtn('All')}
                 type="radio" 
                 name="my_tabs_1" 
                 className={`tab w-35 rounded-2xl ${tabActive === "All" && 'bg-[#170cb8b0] text-white'}`} 
                 aria-label="All" />

                <input 
                type="radio" 
                onClick={()=> handleTabBtn('ai')}
                name="my_tabs_1" 
                className={`tab w-35 rounded-2xl ${tabActive === "ai" && 'bg-[#170cb8b0] text-white'}`} 
                aria-label="Ai Tools" />

                <input 
                onClick={()=> handleTabBtn('design')}
                type="radio" 
                name="my_tabs_1" 
                className={`tab w-35 rounded-2xl ${tabActive === "design" && 'bg-[#170cb8b0] text-white'}`} 
                aria-label="Design Tools" />

            </div>
        </div>
    );
};

export default TabSection;