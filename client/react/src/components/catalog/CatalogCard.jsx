import React from 'react'

export default function CatalogCard({carsData}) {
    return (
        <div key={carsData.id} className="catalog-item">
            <p style={{ color: 'gray', marginTop: '-13px' }}>uploaded on: 2.5.2023</p>
            <img src='https://img.freepik.com/free-photo/view-three-dimensional-car_23-2150998581.jpg' alt={carsData.name} />
            <h3>Model:{carsData.name}</h3>
            <p>Year:{carsData.year}</p>
            <p>Fuel:{carsData.fuel}</p>
            <p>Mileage:{carsData.price}</p>
        </div>
    )
}
