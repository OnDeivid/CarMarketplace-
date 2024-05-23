import { useContext, useEffect, useState } from 'react';

import Filter from '../filter/Filter';
import { authContext } from '../../context/authContext';
import { GrSearchAdvanced } from "react-icons/gr";
import CatalogPage from '../catalog/Catalog';

import './Home.css';

function Home() {
    const { onShowFilter } = useContext(authContext)
    const [posts, setPosts] = useState('')
    useEffect(() => {
        fetch('http://localhost:3000')
            .then(response => {

                if (!response.ok) { throw new Error('Network response was not ok'); }


            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    }, [])

    return (
        <div className="wrapper">
            <div className='content'>
                <Filter />
                <div className="catalog-section">
                    <div style={{ height: '3px', backgroundColor: 'gray' }}></div>
                    <div className='menu-filter' onClick={onShowFilter}><GrSearchAdvanced />
                    </div>
                    {!posts ? <div style={{ color: 'black' }}>No Posts Yet</div> : <CatalogPage />}

                </div>
            </div>
        </div>
    );
};

export default Home;

