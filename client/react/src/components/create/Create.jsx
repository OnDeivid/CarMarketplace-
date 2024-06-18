import React, { useState } from 'react';

import useForm from '../../hooks/useForm';
import useFormValidation from '../../hooks/useFormValidation';
import { POST } from '../../requester';

import './Create.css';

export default function Create() {
    const { formValue, onChangeValue } = useForm({
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
    const [formError, setFormError] = useState('')

    async function onCreate(e) {
        e.preventDefault()

        const validation = useFormValidation(formValue)
        setFormError(validation.error)

        if (validation.flag) { return }

        try {
            await POST('create', formValue)
        } catch (err) {
            return err
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
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.year}</p>

                    </div>

                    <div className="create-item">   {/*mileage*/}
                        <label htmlFor="mileage">Mileage:</label>
                        <input className='createInput' type="text" id="mileage" name="mileage" value={formValue.mileage} onChange={onChangeValue} placeholder='250 000' />
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.mileage}</p>

                    </div>

                    <div className="create-item">   {/*fuel*/}
                        <label htmlFor="fuel">Fuel Type:</label>
                        <select id="fuel" name="fuel" value={formValue.fuel} onChange={onChangeValue} className='createInput'>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                        </select>
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.fuel}</p>

                    </div>

                    <div className="create-item">   {/*model*/}
                        <label htmlFor="model">Model:</label>
                        <input className='createInput' type="text" id="model" name="model" value={formValue.model} onChange={onChangeValue} placeholder='Audi a5 b7' />
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.model}</p>

                    </div>

                    <div className="create-item">   {/*brand*/}
                        <label htmlFor="brand">Brand:</label>
                        <input className='createInput' type="text" id="brand" name="brand" value={formValue.brand} onChange={onChangeValue} placeholder='Audi' />
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.brand}</p>

                    </div>

                    <div className="create-item">   {/*currency*/}
                        <label htmlFor="price">Price:</label>
                        <input className='createInput' type="text" id="price" name="price" value={formValue.price} onChange={onChangeValue} placeholder='6000' />
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.price}</p>
                        <select id="currency" name="currency" value={formValue.currency} onChange={onChangeValue} className='currency'>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="BGN">BGN</option>
                        </select>

                    </div>

                    <div className="create-item">   {/*phoneNumber*/}
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input className='createInput' type="text" id="phoneNumber" name="phoneNumber" value={formValue.phoneNumber} onChange={onChangeValue} placeholder='089 123 321' />
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.phoneNumber}</p>

                    </div>

                    <div className="create-item-desc">  {/*description*/}
                        <label htmlFor="description">description:</label>
                        <textarea className='createInput-desc' type="text" id="description" name="description" value={formValue.description} onChange={onChangeValue} />
                    </div>
                    <p style={{ color: 'red', fontSize: 13, textAlign: 'center', marginTop: '140px' }} className="error-message">{formError?.description}</p>

                    <div className="create-item-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
