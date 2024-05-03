import { useContext } from 'react';

import Filter from '../filter/Filter';
import { authContext } from '../../context/authContext';
import { GrSearchAdvanced } from "react-icons/gr";
import CatalogPage from '../catalog/Catalog';

import './Home.css';

function Home() {
    const { onShowFilter } = useContext(authContext)
    return (
        <div className="wrapper">
            <div className='content'>
                <Filter />
                <div className="catalog-section">
                    <div style={{height:'3px'}}></div>
                    <div className='menu-filter' onClick={onShowFilter}><GrSearchAdvanced />
                    </div>

                    <CatalogPage />
                </div>
            </div>
        </div>
    );
};

export default Home;

