import React, { useState } from 'react';

import { POST } from '../../requester';
import { dataNormalization } from '../utils/dataNormalization';
import { GrSearchAdvanced } from "react-icons/gr";

import useForm from '../../hooks/useForm';

import './Filter.css';

export default function Filter({ setCarsData }) {

    console.log('filter')
    const [showFilter, setShowFilter] = useState(false);
    const { formValue, onChangeValue } = useForm({ model: '', brand: '', year: '', price: '', mileage: '', fuel: 'Diesel' })

    async function onFilter(e) {
        e.preventDefault()
        const normalizedValue = dataNormalization(formValue)
        try {
            const filteredData = await POST('/data/filterBy', normalizedValue)
            setCarsData(filteredData)
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div className='filter-container'>
            {/*------------------ filter fixed---------------------*/}
            <div className='menu-filter' onClick={() => setShowFilter(prev => !prev)}><GrSearchAdvanced /></div>

            <div className={!showFilter ? 'filter-holder' : 'filter-holder-fixed'}>
                <div className='filter-options'>

                    <form className='filter-form'>

                        {/*Brand*/}
                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='brand'>Brand:</label>

                            <input
                                className='filterInput'
                                onChange={onChangeValue}
                                type='text'
                                id='brand'
                                name='brand' />
                        </div>

                        {/*Model*/}
                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='model'>Model:</label>

                            <input
                                className='filterInput'
                                onChange={onChangeValue}
                                type='text'
                                id='model'
                                name='model' />
                        </div>


                        {/*Year*/}
                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='year'>Year:</label>

                            <input
                                className='filterInput'
                                onChange={onChangeValue}
                                type='number'
                                id='year'
                                name='year' />
                        </div>

                        {/*Price*/}
                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='price'>Price:</label>

                            <input
                                className='filterInput'
                                onChange={onChangeValue}
                                type='number'
                                id='price'
                                name='price' />
                        </div>

                        {/*Mileage*/}
                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='mileage'>Mileage:</label>

                            <input
                                className='filterInput'
                                onChange={onChangeValue}
                                type='number'
                                id='mileage'
                                name='mileage' />
                        </div>

                        {/* Fuel */}
                        <div className='filter-item'>
                            <label className='labelOption' htmlFor='fuel'>Fuel Type:</label>

                            <select id='fuel' className='filterInput' name='fuel' onChange={onChangeValue} defaultValue={formValue.fuel}>
                                <option value=''>All</option>
                                <option value='diesel'>Diesel</option>
                                <option value='petrol'>Petrol</option>
                                <option value='electric'>Electric</option>
                            </select>
                        </div>

                        <div className='filter-item-btn'>
                            <button onClick={onFilter} type='submit'>Search</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
