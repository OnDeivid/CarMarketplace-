import { useEffect, useState } from 'react';
import CatalogCard from './CatalogCard';
import { GET } from '../../requester';

import './Catalog.css'
function CatalogPage({ carsData }) {
    const [likedCars, setLikedCars] = useState([])
    useEffect(() => {
        if (likedCars.length === 0) {
            GET(`getHeart`)
                .then(carIds => setLikedCars(carIds))
                .catch(error => console.error('Error fetching liked cars:', error));
        }
    }, []);
    return (
        <div className="catalog-page">
            <div className="catalog-container">
                {carsData.map(carsData => (
                    <CatalogCard key={carsData._id} likedCars={likedCars} setLikedCars={setLikedCars} carsData={carsData} />
                ))}

            </div>
        </div>
    );
};

export default CatalogPage;
