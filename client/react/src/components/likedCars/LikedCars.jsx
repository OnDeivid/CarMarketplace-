// import { useContext } from "react"
// import { authContext } from "../../context/authContext"

import LikedCarsCard from "./LikedCarsCard"

import './LikedCars.css'
export default function LikedCars({showLiked}) {

   
    // const { showLiked } = useContext(authContext)

    return (
        <div className='liked-container'>
            <div className={!showLiked ? 'liked-holder' : 'liked-holder-fixed'}>
                <div className='potato'>
                    <div className="liked-options">
                            <LikedCarsCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
