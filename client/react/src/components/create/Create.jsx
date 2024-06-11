import React, { useState } from 'react';
import './Create.css';
import useAuthForm from '../../hooks/formValues';
import { POST } from '../../requester';

export default function Create() {
    const { formValue, onChangeValue } = useAuthForm({
        year: '',
        mileage: '',
        fuel: 'Petrol',
        model: '',
        brand: '',
        price: '',
        description: '',
        phoneNumber: '',
        currency: 'USD',
    })

    async function onCreate(e) {
        e.preventDefault()
        try {
            const data = await POST('create', formValue)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='container-create'>
            <h1>Create Post</h1>
            <div className='holder'>

                <form onSubmit={onCreate} className="create-form">

                    <div className="create-item">   {/*year*/}
                        <label htmlFor="year">Year:</label>
                        <input className='createInput' type="text" id="year" name="year" value={formValue.year} onChange={onChangeValue} placeholder='2007' />
                    </div>

                    <div className="create-item">   {/*mileage*/}
                        <label htmlFor="mileage">Mileage:</label>
                        <input className='createInput' type="text" id="mileage" name="mileage" value={formValue.mileage} onChange={onChangeValue} placeholder='250 000' />
                    </div>

                    <div className="create-item">   {/*fuel*/}
                        <label htmlFor="fuel">Fuel Type:</label>
                        <select id="fuel" name="fuel" value={formValue.fuel} onChange={onChangeValue} className='createInput'>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                        </select>
                    </div>

                    <div className="create-item">   {/*model*/}
                        <label htmlFor="model">Model:</label>
                        <input className='createInput' type="text" id="model" name="model" value={formValue.model} onChange={onChangeValue} placeholder='Audi a5 b7ø' />
                    </div>

                    <div className="create-item">   {/*brand*/}
                        <label htmlFor="brand">Brand:</label>
                        <input className='createInput' type="text" id="brand" name="brand" value={formValue.brand} onChange={onChangeValue} placeholder='Audi' />
                    </div>
                    
                    <div className="create-item">   {/*currency*/}
                        <label htmlFor="price">Price:</label>
                        <input className='createInput' type="text" id="price" name="price" value={formValue.price} onChange={onChangeValue} placeholder='6000' />
                        <select id="currency" name="currency" value={formValue.currency} onChange={onChangeValue} className='currency'>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="BGN">BGN</option>
                        </select>
                    </div>

                    <div className="create-item">   {/*phoneNumber*/}
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input className='createInput' type="text" id="phoneNumber" name="phoneNumber" value={formValue.phoneNumber} onChange={onChangeValue} placeholder='089 123 321' />
                    </div>

                    <div className="create-item-desc">  {/*description*/}
                        <label htmlFor="description">description:</label>
                        <textarea className='createInput-desc' type="text" id="description" name="description" value={formValue.description} onChange={onChangeValue} />
                    </div>

                    <div className="create-item-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
