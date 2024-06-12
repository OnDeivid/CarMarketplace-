import { useContext } from "react"
import { authContext } from "../../context/authContext"

import LikedCarsCard from "./LikedCarsCard"

import './LikedCars.css'
export default function LikedCars() {

    let catalogItems = [
        { id: 1, model: 'Item 1', mileage: '300', price: '$10', model: 'model of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, model: 'Item 2', mileage: '300', price: '$20', model: 'model of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, model: 'Item 3', mileage: '300', price: '$15', model: 'model of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 4, model: 'Item 4', mileage: '300', price: '$10', model: 'model of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 5, model: 'Item 5', mileage: '300', price: '$20', model: 'model of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 6, model: 'Item 6', mileage: '300', price: '$15', model: 'model of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 7, model: 'Item 7', mileage: '300', price: '$10', model: 'model of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 8, model: 'Item 8', mileage: '300', price: '$20', model: 'model of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 9, model: 'Item 9', mileage: '300', price: '$15', model: 'model of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
    ]
    const { showLiked } = useContext(authContext)

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
