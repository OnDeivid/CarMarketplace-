import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { POST } from '../../requester';

import './Catalog.css'
export default function CatalogCard({ carsData, likedCars, setLikedCars }) {

    function onLike(e) {
        const carId = e.target.parentElement.id ? e.target.parentElement.id : e.target.id
        POST(`like/${carId}`).then(newLikedCars => setLikedCars(newLikedCars)).catch(error => console.error('Error liking car:', error));
    }

    function onDetails(e) {
        const id = e.target.parentElement.id
    }
    return (
        <div key={carsData._id} className="catalog-item" >
            <FaHeart id={carsData._id} onClick={onLike} className={likedCars.includes(carsData._id) ? 'likedCar' : 'likeCar'} />
            <div id={carsData._id} onClick={onDetails}>
                <p style={{ color: 'white', marginTop: '-13px', fontSize: 11 }}>uploaded on: 2.5.2023</p>
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
