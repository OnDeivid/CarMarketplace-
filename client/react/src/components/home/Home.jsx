import { useEffect, useState } from 'react';

import Filter from '../filter/Filter';
import CatalogPage from '../catalog/Catalog';

import './Home.css';
import { GET } from '../../requester';

function Home() {

    // const [onShowFilter, setShowFilter] = () => setShowFilter(prev => !prev);
    const [carsData, setCarsData] = useState(null);
    useEffect(() => {
        GET('home')
            .then(response => setCarsData(response))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log('home')
    return (
        <div className="wrapper">
            <div className='content'>
                <Filter />
                <div className="catalog-section">
                    <div style={{ height: '3px', backgroundColor: '#DC5F00' }}></div>

                    {!carsData ? <div style={{ color: 'black' }}>No Posts Yet</div> : <CatalogPage carsData={carsData} />}

                </div>
            </div>
        </div>
    );
};

export default Home;

