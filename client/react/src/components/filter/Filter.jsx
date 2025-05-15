import React, { useState } from 'react';

import { POST } from '../../requester';
import { dataNormalization } from '../utils/dataNormalization';
import { GrSearchAdvanced } from "react-icons/gr";

import useForm from '../../hooks/useForm';

import './Filter.css';

const filterFields = [
    { label: "Brand", name: "brand", type: "text" },
    { label: "Model", name: "model", type: "text" },
    { label: "Year", name: "year", type: "number" },
    { label: "Price", name: "price", type: "number" },
    { label: "Mileage", name: "mileage", type: "number" },
]


export default function Filter({ setCarsData }) {

    const [showFilter, setShowFilter] = useState(false);
    const { formValue, onChangeValue } = useForm({ model: '', brand: '', year: '', price: '', mileage: '', fuel: '' })


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


                    <form className="filter-form">
                        {filterFields.map(({ label, name, type }) => (

                            <div className="filter-item" key={name}>
                                <label className="labelOption" htmlFor={name}>
                                    {label}
                                </label>

                                <input
                                    className="filterInput"
                                    onChange={onChangeValue}
                                    type={type}
                                    id={name}
                                    name={name}
                                />

                            </div>
                        ))}


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