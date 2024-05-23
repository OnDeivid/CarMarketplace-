import React, { useContext } from 'react';
import { authContext } from '../../context/authContext';

import './Filter.css';

export default function Filter() {
    const { showFilter} = useContext(authContext);
    return (
        <div className='filter-container'>
            <div className={!showFilter ? 'filter-holder' : 'filter-holder-fixed'}>
                <div className='filter-options'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
