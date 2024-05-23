import './Catalog.css'
import CatalogCard from './CatalogCard';
const CatalogPage = () => {
    const catalogItems = [
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
    ];

    return (
        <div className="catalog-page">
            <div className="catalog-container">
                {catalogItems.map(item => (
                    <CatalogCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
