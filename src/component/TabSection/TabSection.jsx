import React from 'react';

const TabSection = () => {
    return (
        <div className='my-20'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" />
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 3" />
            </div>
        </div>
    );
};

export default TabSection;