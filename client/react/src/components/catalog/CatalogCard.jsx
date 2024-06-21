import React from 'react'
import { FaHeart } from "react-icons/fa";
import './Catalog.css'
//https://cdn.iconscout.com/icon/free/png-512/free-heart-love-like-favorite-46263.png?f=webp&w=256
//https://cdn.iconscout.com/icon/free/png-512/free-heart-love-like-favorite-save-46261.png?f=webp&w=256
export default function CatalogCard({ carsData }) {
    return (
        <div key={carsData.id} className="catalog-item">
            <FaHeart className='likeCar' />
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
    )
}
