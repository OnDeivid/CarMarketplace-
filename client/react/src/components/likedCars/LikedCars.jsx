import { useEffect, useState } from "react";

import { GET } from "../../requester";

import LikedCarsCard from "./LikedCarsCard"

import './LikedCars.css'

export default function LikedCars({ showLiked }) {
    const [likedCars, setLikedCars] = useState([])

    useEffect(() => {
        GET(`/data/likedCars`)
            .then(carIds => setLikedCars(carIds))
            .catch(error => console.error('Error fetching liked cars:', error));
    }, []);
    return (
        <div className='liked-container'>
            <div className={!showLiked ? 'liked-holder' : 'liked-holder-fixed'}>
                <div className='potato'>
                    <div className="liked-options">
                        <LikedCarsCard carInfo={likedCars} setLikedCars={setLikedCars} />
                    </div>
                </div>
            </div>
        </div>
    )
}
