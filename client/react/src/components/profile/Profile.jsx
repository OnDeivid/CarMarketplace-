import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProfileCards from './ProfileCard';
import { DEL, GET, POST } from '../../requester';

import './Profile.css'

export default function Profile({ userData }) {

    const defaultIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU'

    const navigate = useNavigate()

    const [myCars, setMyCars] = useState([])
    const [likedCars, setLikedCars] = useState([])
    const { payload } = userData.data

    async function removeLikedCar(carId) {
        try {
            await POST(`/data/like/${carId}`);

            const newLikedCars = likedCars.filter(car => car._id !== carId)
            setLikedCars(newLikedCars)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function editCar(carId) {
        navigate(`/edit/${carId}`)
    }

    async function deleteMyCar(carId) {
        const result = confirm('Are you certain you want to delete this post? Once deleted, it cannot be recovered.')

        if (result) {
            try {
                await DEL(`/data/deleteCar/${carId}`);

                const newMyCars = myCars.filter(car => car._id !== carId);
                setMyCars(newMyCars)
            } catch (error) {
                console.error('An error occurred:', error);
            }
        } else {
            alert('delete canceled')
        }
    }

    useEffect(() => {
        GET('/data/mycars').then(res => setMyCars(res))
        GET('/data/likedCars').then(res => setLikedCars(res))
    }, [])

    return (
        <div className="profile-page">
            <div className='profile-cover'>
                <div className="profile-header">
                    <img src={payload.icon ? payload.icon : defaultIcon} alt="Profile" className="profile-img" />
                </div>
            </div>

            {/* USER DATA!!! */}
            <div className='holderG'>
                
                <div className="profile-details">
                    <div className='infoHolder'>
                        <h2>User Details</h2>
                        <p>Name: {payload.username}</p>
                        <p>Email: {payload.email}</p>
                        <p>Phone: {payload.phone}</p>
                    </div>
                </div>


                {/* LIKED CARS!!! */}
                <div className='potatoHolder'>
                    <p className='likedText'>Liked Cars</p>
                    {likedCars.map(item => {
                        return (
                            <ProfileCards key={item._id} item={item} removeLikedCar={removeLikedCar} />
                        )
                    })}
                </div>

            </div>

            {/* MY CARS!!! */}
            <div className='myCars-Post'>
                {myCars.map(item => {
                    return (
                        <ProfileCards key={item._id} item={item} editCar={editCar} deleteMyCar={deleteMyCar} />
                    )
                })}
            </div>
        </div>
    );
}
