import React, { useContext } from 'react';
import { authContext } from '../../context/authContext';
import './Filter.css';

export default function Filter() {
    const { showFilter } = useContext(authContext);

    return (
        <div className='filter-container'>
            <div className={!showFilter ? 'filter-holder' : 'filter-holder-fixed'}>
                <div className='filter-options'>

                    <form className='filter-form'>
                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='model'>Model:</label>
                            <input className='filterInput' type='text' id='model' name='model' />
                        </div>

                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='brand'>Brand:</label>
                            <input className='filterInput' type='text' id='brand' name='brand' />
                        </div>

                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='year'>Year:</label>
                            <input className='filterInput' type='number' id='year' name='year' />
                        </div>

                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='price'>Price:</label>
                            <input className='filterInput' type='number' id='price' name='price' />
                        </div>

                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='mileage'>Mileage:</label>
                            <input className='filterInput' type='number' id='mileage' name='mileage' />
                        </div>

                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='fuel'>Fuel Type:</label>
                            <select id='fuel' name='fuel'>
                                <option value=''>Select Fuel Type</option>
                                <option value='petrol'>Petrol</option>
                                <option value='diesel'>Diesel</option>
                                <option value='electric'>Electric</option>
                                <option value='hybrid'>Hybrid</option>
                            </select>
                        </div>

                        <div className='filter-item-btn'>
                            <button type='submit'>Search</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
