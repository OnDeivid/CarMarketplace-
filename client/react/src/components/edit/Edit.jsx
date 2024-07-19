import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GET } from "../../requester";

import Create from "../create/Create";

export default function Edit({ userData }) {

    const [carData, setCarData] = useState('');
    const { id } = useParams();
    
    useEffect(() => {
        GET(`/data/getById/${id}`)
            .then(carInfo => setCarData({
                brand: carInfo.brand,
                model: carInfo.model,
                fuel: carInfo.fuel,
                mileage: carInfo.mileage,
                price: carInfo.price,
                currency: carInfo.currency,
                phoneNumber: carInfo.phoneNumber,
                description: carInfo.description,
                year: carInfo.year,
                userId: carInfo.userId,
            }))
            .catch(err => console.log(err))
    }, [])

    return (
        <Create userData={userData} editMode={true} carData={carData} />
    )

}