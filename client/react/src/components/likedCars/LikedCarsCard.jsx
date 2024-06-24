import React from 'react'
import './LikedCarsCard.css'

export default function LikedCarsCard({ carInfo }) {

    return (
        <div className='likedPosts'>
            {carInfo.map(car => {
                return (
                    <div className="likedHolder" key={car._id}>
                        <h3 style={{ color: 'white' }}>Audi RS6</h3>
                        <p style={{ color: 'white', marginTop: '-20px', marginLeft: '10px', fontSize: '10px' }}>uploaded on: 11.25.2023</p>
                        <img src='https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' />
                        <div className='likedCarInfo'>
                            <p>year: {car.year}</p>
                            <p>Fuel: {car.fuel}</p>
                            <p>Mileage: {car.mileage}km</p>
                        </div>
                        <p style={{ width: 300, fontSize: 10, textAlign: 'center', color: '#D3D3D3', marginTop: -5 }}>{car.description}</p>
                        <h2>{car.price}{car.currency}</h2>
                        <div className='line'></div>
                    </div>
                )
            })}
        </div>

    )
}
{/* <div className="likedHolder" id={carInfo._id}>
    <h3 style={{ color: 'white' }}>Audi RS6</h3>
    <p style={{ color: 'white', marginTop: '-20px', marginLeft: '10px', fontSize: '10px' }}>uploaded on: 11.25.2023</p>
    <img src='https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' />
    <div className='likedCarInfo'>
        <p>year: {carInfo.year}|</p>
        <p>Fuel: {carInfo.fuel}</p>
        <p>Mileage: {carInfo.mileage}km</p>
    </div>
    <h2>{carInfo.price}{carInfo.currency}</h2>
    <div className='line'></div>
</div>  */}