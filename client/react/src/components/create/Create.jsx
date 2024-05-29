import React, { useState } from 'react';
import './Create.css'; // Import CSS file for styling

export default function Create() {
    const [formData, setFormData] = useState({
        year: '',
        mileage: '',
        fuel: '',
        model: '',
        brand: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='container-create'>
            <h1>Create Post</h1>
            <div className='holder'>

                <form onSubmit={handleSubmit} className="create-form">
                    <div className="create-item">
                        <label htmlFor="year">Year:</label>
                        <input className='createInput' type="text" id="year" name="year" value={formData.year} onChange={handleChange} />
                    </div>

                    <div className="create-item">
                        <label htmlFor="mileage">Mileage:</label>
                        <input className='createInput' type="text" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} />
                    </div>

                    <div className="create-item">
                        <label htmlFor="fuel">Fuel Type:</label>
                        <select id="fuel" name="fuel" value={formData.fuel} onChange={handleChange} className='createInput'>
                            <option value="">Select Fuel Type</option>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                        </select>
                    </div>

                    <div className="create-item">
                        <label htmlFor="model">Model:</label>
                        <input className='createInput' type="text" id="model" name="model" value={formData.model} onChange={handleChange} />
                    </div>

                    <div className="create-item">
                        <label htmlFor="brand">Brand:</label>
                        <input className='createInput' type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
                    </div>

                    <div className="create-item">
                        <label htmlFor="price">Price:</label>
                        <input className='createInput' type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div className="create-item-desc">
                        <label htmlFor="description">description:</label>
                        <textarea className='createInput-desc' type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
                    </div>

                    <div className="create-item-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
