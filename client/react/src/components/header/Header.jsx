import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import * as FaIcons from "react-icons/fa";
import { MdHideSource } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

import { SideBarData } from '../../CONST';

import './Header.css'

export default function Header() {
    const [sideBar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(prev => !prev)

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    {sideBar ? <MdHideSource onClick={showSideBar} /> : <FaIcons.FaBars onClick={showSideBar} />}
                </Link>

                <Link to='#' className='menu-loved'>
                    <CiHeart />
                </Link>

            </div>
            <nav>
                <ul className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    {SideBarData.map((x, i) => {
                        return (
                            <li key={i} className={x.title}>
                                <Link to={x.path} className='nav-text'>
                                    <x.icon />
                                    <span>{x.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
