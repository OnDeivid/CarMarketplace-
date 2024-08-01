import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { POST, PUT } from '../../requester';

import useForm from '../../hooks/useForm';
import useFormValidation from '../../hooks/useFormValidation';

import './Create.css';
import { dataNormalization } from '../utils/dataNormalization';

export default function Create({ userData, editMode, carData }) {

    const userId = userData.data.payload._id
    const phoneNumber = userData.data.payload.phone
    const { id } = useParams()

    const { formValue, onChangeValue, setFormValue } = useForm({
        year: '',
        mileage: '',
        fuel: 'Petrol',
        model: '',
        brand: '',
        price: '',
        description: '',
        phoneNumber: phoneNumber,
        currency: 'USD',
        userId: userId,
        image: '',
    })
    const [formError, setFormError] = useState('')
    const [reqError, setReqError] = useState('');

    async function onCreate(e) {
        e.preventDefault()

        const validation = useFormValidation(formValue)
        setFormError(validation.error)

        if (validation.flag) { return }
        const data = dataNormalization(formValue)

        try {
            await POST('/data/create', data)
        } catch (err) {
            return err
        }
    }

    async function onUpdate(e) {
        e.preventDefault()

        const userIdData = userData.data.payload._id

        const validation = useFormValidation(formValue)
        setFormError(validation.error)

        if (validation.flag) { return }
        const data = dataNormalization(formValue)

        if (userIdData != carData.userId) { setReqError('You are not authorized to edit this item.'); return }
        try {
            await PUT(`/data/updateCarData/${id}`, data)
        } catch (error) {
            console.log(error.message)
            setReqError(error.message)
        }

    }
    // /updateCarData/:id

    useEffect(() => {
        if (editMode && carData) {
            setFormValue({
                ...formValue, ...carData
            });
        }
    }, [editMode, carData, userId]);

    return (
        <div className='container-create'>
            <div style={{ height: 65 }}></div>
            <div className='holder'>
                {reqError && <h4 className='requestError'>{reqError}</h4>}
                <form onSubmit={editMode && carData ? onUpdate : onCreate} className="create-form">

                    <div className="create-item">   {/*year*/}
                        <label htmlFor="year">Year:</label>
                        <input className='createInput'
                            type="text"
                            id="year"
                            name="year"
                            value={formValue.year}
                            onChange={onChangeValue}
                            placeholder='2007' />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.year}</p>
                    </div>

                    <div className="create-item">   {/*fuel*/}
                        <label htmlFor="fuel">Fuel Type:</label>
                        <select id="fuel" name="fuel" value={formValue.fuel} onChange={onChangeValue} className='createInput'>
                            <option value="PETROL">Petrol</option>
                            <option value="DIESEL">Diesel</option>
                            <option value="ELECTRIC">Electric</option>
                        </select>

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.fuel}</p>
                    </div>

                    <div className="create-item">   {/*Currency and Price*/}
                        <label htmlFor="price">Price:</label>
                        <input className='createInput' type="text" id="price" name="price" value={formValue.price} onChange={onChangeValue} placeholder='6000' />

                        <select id="currency" name="currency" value={formValue.currency} onChange={onChangeValue} className='currency'>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="BGN">BGN</option>
                        </select>

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.price}</p>
                    </div>

                    <div className="create-item">   {/*mileage*/}
                        <label htmlFor="mileage">Mileage:</label>
                        <input
                            className='createInput'
                            type="text"
                            id="mileage"
                            name="mileage"
                            value={formValue.mileage}
                            onChange={onChangeValue}
                            placeholder='250 000' />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.mileage}</p>
                    </div>

                    <div className="create-item">   {/*model*/}
                        <label htmlFor="model">Model:</label>
                        <input
                            className='createInput'
                            type="text"
                            id="model"
                            name="model"
                            value={formValue.model}
                            onChange={onChangeValue}
                            placeholder='Audi a5 b7' />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.model}</p>
                    </div>

                    <div className="create-item">   {/*brand*/}
                        <label htmlFor="brand">Brand:</label>
                        <input
                            className='createInput'
                            type="text"
                            id="brand"
                            name="brand"
                            value={formValue.brand}
                            onChange={onChangeValue}
                            placeholder='Audi' />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.brand}</p>
                    </div>

                    <div className="create-item">   {/*phoneNumber*/}
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            disabled
                            className='createInput'
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formValue.phoneNumber}
                            onChange={onChangeValue}
                            placeholder='089 123 321' />

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.phoneNumber}</p>
                    </div>

                    <div className="create-item-desc">  {/*description*/}
                        <label htmlFor="description">Description:</label>
                        <textarea
                            className='createInput-desc'
                            type="text" id="description"
                            name="description"
                            value={formValue.description}
                            onChange={onChangeValue}
                        />
                    </div>
                    <p style={{ color: 'red', fontSize: 13, textAlign: 'center', marginTop: '180px' }} className="error-message">{formError?.description}</p>

                    <div className="create-item-images">   {/*images*/}

                        <input onChange={onChangeValue} className='createInput' value={formValue.image} autoComplete="off" type="text" id="image" name="image" placeholder='image' />
                        
                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formError?.image}</p>

                    </div>


                    <div className="create-item-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
