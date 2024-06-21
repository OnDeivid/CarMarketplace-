import { useContext, useEffect, useState } from 'react';

import Filter from '../filter/Filter';
import { authContext } from '../../context/authContext';
import { GrSearchAdvanced } from "react-icons/gr";
import CatalogPage from '../catalog/Catalog';

import './Home.css';
import { GET } from '../../requester';

function Home() {
    const { onShowFilter } = useContext(authContext)
    const [carsData, setCarsData] = useState(null);
    useEffect(() => {
        GET('home')
            .then(response => setCarsData(response))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="wrapper">
            <div className='content'>
                <Filter />
                <div className="catalog-section">
                    <div style={{ height: '3px', backgroundColor: 'orange' }}></div>

                    {/*------------------ filter fixed---------------------*/}
                    <div className='menu-filter' onClick={onShowFilter}><GrSearchAdvanced /></div>

                    {!carsData ? <div style={{ color: 'black' }}>No Posts Yet</div> : <CatalogPage carsData={carsData} />}

                </div>
            </div>
        </div>
    );
};

export default Home;

