import { useContext, useEffect, useState } from 'react';

import Filter from '../filter/Filter';
import { authContext } from '../../context/authContext';
import { GrSearchAdvanced } from "react-icons/gr";
import CatalogPage from '../catalog/Catalog';

import './Home.css';
import { GET } from '../../requester';

function Home() {
    const { onShowFilter } = useContext(authContext)
    const [carsData, setCarsData] = useState('');
    useEffect(() => {
        try {
            GET('home').then(response => setCarsData(response))
        } catch (err) {
            console.log(err)
        }

    }, [])
    return (
        <div className="wrapper">
            <div className='content'>
                <Filter />
                <div className="catalog-section">
                    <div style={{ height: '3px', backgroundColor: 'gray' }}></div>

                    {/*------------------ filter fixed---------------------*/}
                    <div className='menu-filter' onClick={onShowFilter}><GrSearchAdvanced /></div>
                    {/*------------------ filter fixed---------------------*/}

                    {!carsData ? <div style={{ color: 'black' }}>No Posts Yet</div> : <CatalogPage carsData={carsData} />}

                </div>
            </div>
        </div>
    );
};

export default Home;

