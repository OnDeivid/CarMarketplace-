import './Catalog.css'
const CatalogPage = () => {
    const catalogItems = [
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 1, name: 'Item 1', price: '$10', description: 'Description of Item 1', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 2, name: 'Item 2', price: '$20', description: 'Description of Item 2', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },
        { id: 3, name: 'Item 3', price: '$15', description: 'Description of Item 3', imageUrl: 'https://www.audiusa.com/content/dam/nemo/us/inside_audi/Innovation/1920x1080_MY24-RS6-Front-Parked.jpg' },

    ];

    return (
        <div className="catalog-page">
            <div className="catalog-container">
                {catalogItems.map(item => (
                    <div key={item.id} className="catalog-item">
                        <p style={{ color: 'gray',marginTop:'-13px' }}>uploaded on: 2.5.2023</p>
                        <img src={item.imageUrl} alt={item.name} />
                        <h3>Model:{item.name}</h3>
                        <p>Year:{item.description}</p>
                        <p>Fuel:{item.price}</p>
                        <p>Mileage:{item.price}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CatalogPage;
