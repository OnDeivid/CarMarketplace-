import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

import extractDate from '../utils/extractDate'

import './ProfileCard.css'

export default function ProfileCards({ item, removeLikedCar, deleteMyCar }) {
    return (
        <div className='carPosts'>
            <div className="profile-container">
                <p style={{ color: 'white', marginTop: '5px', marginLeft: '10px', fontSize: '10px' }}>{extractDate(item.createdAt)}</p>


                {removeLikedCar
                    ?
                    <CiCircleRemove onClick={() => { removeLikedCar(item._id) }} id={item._id} className='removeLike'></CiCircleRemove>
                    :
                    <>
                        <LuFileEdit /*onClick={editMyCar}*/ id={item._id} className='editCar'></LuFileEdit>
                        <MdOutlineDelete onClick={() => deleteMyCar(item._id)} id={item._id} className='deleteCar'></MdOutlineDelete>
                    </>
                }

                <h3>{item.model}</h3>
                <img src={item.imageUrl} />
                <div className='carInfo'>
                    <p>Year: {item.year} , Fuel: {item.fuel}</p>
                    <p>Mileage:{item.mileage}</p>
                </div>

                <h2>{item.price}</h2>

            </div>
        </div>
    )
}
