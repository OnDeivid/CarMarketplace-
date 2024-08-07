import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CiHeart } from "react-icons/ci";

import LikedCars from '../likedCars/LikedCars';

export default function LikedCarsCatalog() {
    
    console.log('HeartedCars')

    const [showLiked, setShowLiked] = useState(false)
    
    return (
        <div>
            <Link to='#' onClick={() => setShowLiked(prev => !prev)} className={showLiked ? 'menu-loved-active' : 'menu-loved'}>
                <CiHeart />
            </Link>
            
            {showLiked && <LikedCars showLiked={showLiked} />}

        </div>
    )
}
