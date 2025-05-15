import extractDate from '../utils/extractDate'

import './LikedCarsCard.css'

export default function LikedCarsCard({ carInfo }) {
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
                            <p className='descriptionLikedCarsShort'>{car.description}</p>
                            <h2 className='priceLikedCars'>{car.price}{car.currency}</h2>
                            <div className='line'></div>
                        </div>
                    )
                }) : <p style={{ textAlign: 'center' }}>No cars liked yet</p>}
        </div>
    )
}
