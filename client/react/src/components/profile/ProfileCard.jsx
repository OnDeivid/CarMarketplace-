import React from 'react'

import extractDate from '../utils/extractDate'

import './ProfileCard.css'

export default function ProfileCards({ item, removeLikedCar }) {
    return (
        <div className='carPosts'>
            <div className="profile-container">
                <p style={{ color: 'white', marginTop: '5px', marginLeft: '10px', fontSize: '10px' }}>{extractDate(item.createdAt)}</p>
                <button onClick={removeLikedCar} id={item._id} className='removeLike'>X</button>
                <h3>{item.model}</h3>
                <img src={item.imageUrl} />
                <div className='carInfo'>
                    <p>Price:{item.price}, Fuel:{item.fuel}</p>
                    <p>Mileage:{item.mileage}</p>
                </div>

                <h2>{item.price}</h2>

            </div>
        </div>
    )
}
