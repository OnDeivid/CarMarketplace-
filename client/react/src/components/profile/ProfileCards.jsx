import React from 'react'
import './ProfileCards.css'
export default function ProfileCards({ item }) {
    return (
        <div className='carPosts'>
            <div className="profile-container">
                <p style={{ color: 'gray', marginTop: '5px', marginLeft: '10px', fontSize: '10px' }}>uploaded on: 2.5.2023</p>
                <h3>Model:{item.model}</h3>
                <img src={item.imageUrl} />
                <div className='carInfo'>
                    <p>Price:{item.price}</p>
                    <p>Fuel:{item.fuel}</p>
                    <p>Mileage:{item.mileage}</p>
                </div>
                <h2>{item.price}</h2>

            </div>
        </div>
    )
}
