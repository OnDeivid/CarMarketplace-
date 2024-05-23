import React from 'react'

export default function CatalogCard({ item }) {
    return (
        <div key={item.id} className="catalog-item">
            <p style={{ color: 'gray', marginTop: '-13px' }}>uploaded on: 2.5.2023</p>
            <img src={item.imageUrl} alt={item.name} />
            <h3>Model:{item.name}</h3>
            <p>Year:{item.description}</p>
            <p>Fuel:{item.price}</p>
            <p>Mileage:{item.price}</p>
        </div>
    )
}
