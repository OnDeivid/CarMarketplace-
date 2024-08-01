import extractDate from '../utils/extractDate'

import './LikedCarsCard.css'

export default function LikedCarsCard({ carInfo }) {
    console.log('likedCarsCARD')
    return (
        <div className='likedPosts'>
            {carInfo.length != 0 ?
                carInfo.map(car => {
                    return (
                        <div className="likedHolder" key={car._id}>
                            <h3 style={{ color: 'white' }}>{car.model}</h3>
                            <p style={{ color: 'white', marginTop: '-20px', marginLeft: '10px', fontSize: '10px' }}>{extractDate(car.createdAt)}</p>
                            <img className='carLikedImg' src={car.image} />
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
                }) : <p style={{ textAlign: 'center' }}>No cars liked yet</p>}
        </div>
    )
}
