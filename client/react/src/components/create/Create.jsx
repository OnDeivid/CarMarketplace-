import React, { useState } from 'react';

import { POST } from '../../requester';

import useForm from '../../hooks/useForm';
import useFormValidation from '../../hooks/useFormValidation';

import './Create.css';
import { dataNormalization } from '../utils/dataNormalization';

export default function Create({ userData }) {
    console.log('create')

    const userId = userData.data.payload._id
    const { formValue, onChangeValue } = useForm({
        year: '',
        mileage: '',
        fuel: 'petrol',
        model: '',
        brand: '',
        price: '',
        description: '',
        phoneNumber: '',
        currency: 'USD',
        userId: userId

    })
    const [formError, setFormError] = useState('')

    async function onCreate(e) {
        e.preventDefault()


        const validation = useFormValidation(formValue)
        setFormError(validation.error)

        if (validation.flag) { return }
        const data = dataNormalization(formValue)
        console.log(data)
        try {

            await POST('/data/create', data)
        } catch (err) {
            return err
        }
    }

    return (
        <div className='container-create'>
            <h1>asdasd</h1>
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
                        <label htmlFor="description">Description:</label>
                        <textarea className='createInput-desc' type="text" id="description" name="description" value={formValue.description} onChange={onChangeValue} />
                    </div>
                    <p style={{ color: 'red', fontSize: 13, textAlign: 'center', marginTop: '180px' }} className="error-message">{formError?.description}</p>

                    <div className="create-item-images">   {/*images*/}

                        <input className='createInput' autoComplete="off" type="text" id="images" name="images1" placeholder='image-1' />
                        <input className='createInput' autoComplete="off" type="text" id="images" name="images2" placeholder='image-2' />
                        <input className='createInput' autoComplete="off" type="text" id="images" name="images3" placeholder='image-3' />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.phoneNumber}</p>
                    </div>


                    <div className="create-item-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
