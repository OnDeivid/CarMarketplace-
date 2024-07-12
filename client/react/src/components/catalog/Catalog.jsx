import { useContext, useEffect, useState } from 'react';

import { GET } from '../../requester';
import { authContext } from '../../context/authContext';

import CatalogCard from './CatalogCard';

import './Catalog.css'

function CatalogPage({ carsData }) {
    console.log('catalog')
    
    const { auth } = useContext(authContext)

    const [likedCars, setLikedCars] = useState([])
    useEffect(() => {
        if (!auth) { return }
        if (likedCars.length === 0) {
            GET(`/data/getHeart`)
                .then(carIds => setLikedCars(carIds))
                .catch(error => console.error('Error fetching liked cars:', error));
        }
    }, []);

    return (
        <div className="catalog-page">
            <div className="catalog-container">
                {carsData.map(carsData => (
                    <CatalogCard key={carsData._id} likedCars={likedCars} auth={auth} setLikedCars={setLikedCars} carsData={carsData} />
                ))}

            </div>
        </div>
    );
};

export default CatalogPage;
