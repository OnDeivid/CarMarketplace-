import React from 'react'
import './LikedCarsCard.css'

export default function LikedCarsCard({ item }) {
    return (
        <div className='likedPosts'>
            <div className="likedHolder">
                <h3 style={{ color: 'white' }}>Audi RS6</h3>
                <p style={{ color: 'white',marginTop:'-20px', marginLeft: '10px', fontSize: '10px' }}>uploaded on: 11.25.2023</p>
                <img src='https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' />
                <div className='likedCarInfo'>
                    <p>Transm: Auto|</p>
                    <p>Fuel: Gass|</p>
                    <p>Mileage: 200 000km</p>
                </div>
                <h2>300 000$</h2>
                <div className='line'></div>
            </div>
            <div className="likedHolder">
                <h3 style={{ color: 'white' }}>Audi RS6</h3>
                <p style={{ color: 'white',marginTop:'-20px', marginLeft: '10px', fontSize: '10px' }}>uploaded on: 11.25.2023</p>
                <img src='https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' />
                <div className='likedCarInfo'>
                    <p>Transm: Auto,</p>
                    <p>Fuel: Gass|</p>
                    <p>Mileage: 200 000km</p>
                </div>
                <h2>300 000$</h2>
                <div className='line'></div>
            </div>
        </div>

    )
}
