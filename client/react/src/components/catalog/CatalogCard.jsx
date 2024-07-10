import { useNavigate } from "react-router-dom";

import { POST } from '../../requester';
import { FaHeart } from "react-icons/fa";

import extractDate from "../utils/extractDate";

import './Catalog.css'

export default function CatalogCard({ carsData, likedCars, setLikedCars, auth }) {

    const navigate = useNavigate()

    function onLike(carId) {

        if (!auth) { navigate('/login') }
        POST(`like/${carId}`)
            .then(newLikedCars => setLikedCars(newLikedCars))
            .catch(error => console.error('Error liking car:', error));
    }

    function onDetails(carId) {
        const id = carId
    }
    return (
        <div key={carsData._id} className="catalog-item" >

            {auth ? <FaHeart onClick={() => onLike(carsData._id)} className={likedCars.includes(carsData._id) ? 'likedCar' : 'likeCar'} /> : null}

            <div onClick={() => onDetails(carsData._id)}>

                <p className='datePost' style={{ color: "rgb(200, 200, 200)", fontSize: 9.5 }}>{extractDate(carsData.createdAt)}</p>
                <img src='https://img.freepik.com/free-photo/view-three-dimensional-car_23-2150998581.jpg' alt={carsData.name} />

                <h3>{carsData.brand}/{carsData.model}</h3>

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
