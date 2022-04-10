import React, { useState } from 'react';
import './Filter.scss';
import { filtersMobile } from '../../lib/mock/mock';
import { FiFilter } from 'react-icons/fi';

const Filter = () => {
    const [openFilter, setOpenFilter] = useState(false);
    return (
        <div className="Filter-Filter">
            <div className='Filter-Wrapper' onClick={() => setOpenFilter(!openFilter)}>
                <FiFilter style={{ color: '#000000' }} />
                <p className='Filter-FilterTitle'>Filter</p>
            </div>
            {openFilter && (
                <>
                    {
                        filtersMobile.map((filter, index) => (
                            <p className="Filter-FilterItem" activeclassname="Filter-FilterItem_active" onClick={() => setOpenFilter(!openFilter)} key={index}> {filter.title}</p>
                        ))
                    }
                </>
            )}
        </div>
    );
}

export default Filter;