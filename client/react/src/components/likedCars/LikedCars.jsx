import { useEffect, useState } from "react";

import { GET } from "../../requester";

import LikedCarsCard from "./LikedCarsCard"

import './LikedCars.css'

export default function LikedCars({ showLiked }) {
    console.log('likedCars')
    
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
