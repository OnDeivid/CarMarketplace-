import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

import extractDate from '../utils/extractDate'

import './ProfileCard.css'
import { Link } from "react-router-dom";

export default function ProfileCards({ item, removeLikedCar, deleteMyCar, editMyCar }) {
    return (
        <div className='carPosts'>
            <div className="profile-container">
                <p style={{ color: 'white', marginTop: '5px', marginLeft: '10px', fontSize: '10px' }}>{extractDate(item.createdAt)}</p>


                {removeLikedCar
                    ?
                    <CiCircleRemove onClick={() => { removeLikedCar(item._id) }} className='removeLike'></CiCircleRemove>
                    :
                    <>
                        <Link to={`/edit/${item._id}`}> <LuFileEdit className='editCar' />   </Link>
                        <MdOutlineDelete onClick={() => deleteMyCar(item._id)} className='deleteCar'></MdOutlineDelete>
                    </>
                }

                <h3>{item.model}</h3>
                <img className="carImage" src={item.image} />
                <div className='carInfo'>
                    <h5 style={{ marginTop: 50 }}>YEAR : {item.year} /  FUEL : {item.fuel}</h5>
                    <h5 style={{ marginTop: -20 }}>MILEAGE : {item.mileage}</h5>
                </div>

                <h2>{item.price} {item.currency}</h2>

            </div>
        </div>
    )
}
