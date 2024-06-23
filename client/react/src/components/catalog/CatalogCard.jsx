import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { POST } from '../../requester';

import './Catalog.css'
export default function CatalogCard({ carsData, likedCars, setLikedCars }) {

    function onLike(carId) {

        POST(`like/${carId}`).then(newLikedCars => setLikedCars(newLikedCars)).catch(error => console.error('Error liking car:', error));
    }

    function onDetails(carId) {
        const id = carId
    }
    return (
        <div key={carsData._id} className="catalog-item" >
            <FaHeart onClick={() => onLike(carsData._id)} className={likedCars.includes(carsData._id) ? 'likedCar' : 'likeCar'} />
            <div onClick={() => onDetails(carsData._id)}>
                <p className='datePost'>uploaded on: 2.5.2023</p>
                <img src='https://img.freepik.com/free-photo/view-three-dimensional-car_23-2150998581.jpg' alt={carsData.name} />
                <h3>{carsData.model}</h3>
                <p className='shortInfo'>Year:{carsData.year} , fuel:{carsData.fuel} , {carsData.mileage}km</p>

                <div style={{ height: 0.5, width: '100%', backgroundColor: 'white' }}></div>

                <h5 className='description'>
                    {carsData.description.length > 130 ? carsData.description.slice(0, 130) + "..." : carsData.description}
                </h5>
                <h2 className='price'>{carsData.price} {carsData.currency}</h2>
            </div>

        </div>
    )
}
