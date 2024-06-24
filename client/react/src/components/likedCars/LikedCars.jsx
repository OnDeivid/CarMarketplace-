import { useEffect, useState } from "react";

import LikedCarsCard from "./LikedCarsCard"
// import { useContext } from "react"
// import { authContext } from "../../context/authContext"
import { GET } from "../../requester";

import './LikedCars.css'
export default function LikedCars({ showLiked }) {
    const [likedCars, setLikedCars] = useState([])
    useEffect(() => {
        GET(`likedCars`)
            .then(carIds => setLikedCars(carIds))
            .catch(error => console.error('Error fetching liked cars:', error));
    }, []);
    return (
        <div className='liked-container'>
            <div className={!showLiked ? 'liked-holder' : 'liked-holder-fixed'}>
                <div className='potato'>
                    <div className="liked-options">
                        <LikedCarsCard carInfo={likedCars} />
                    </div>
                </div>
            </div>
        </div>
    )
}
