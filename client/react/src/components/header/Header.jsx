import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { MdHideSource } from "react-icons/md";

import { SideBarData } from '../../CONST';
import { authContext } from '../../context/authContext';

import * as FaIcons from "react-icons/fa";
import LikedCarsCatalog from './LikedCarsCatalog';

import './Header.css'

export default function Header() {

    const [sideBar, setSideBar] = useState(false)
    const { auth } = useContext(authContext)

    const showSideBar = () => setSideBar(prev => !prev)
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    {sideBar ? <MdHideSource onClick={showSideBar} /> : <FaIcons.FaBars onClick={showSideBar} />}
                </Link>

                <LikedCarsCatalog />

            </div>

            <nav>
                <ul className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    {SideBarData.filter(item =>
                        (!auth && (item.accessibilityType == 'guest' || item.accessibilityType == 'all'))
                        ||
                        (auth && (item.accessibilityType == 'user' || item.accessibilityType == 'all')))
                        .map((item, index) => (

                            <li key={index} className={item.title}>
                                <Link to={item.path} className='nav-text'>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        ))}
                </ul>
            </nav >
        </>
    )
}
