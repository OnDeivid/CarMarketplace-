import './Catalog.css'
import CatalogCard from './CatalogCard';
function CatalogPage({carsData}) {

    return (
        <div className="catalog-page">
            <div className="catalog-container">
                {carsData.map(carsData => (
                    <CatalogCard key={carsData._id} carsData={carsData} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
