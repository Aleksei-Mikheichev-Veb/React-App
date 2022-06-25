import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css'

const setActive = ({ isActive }) => isActive ? s.active_link : s.link;

const NavBar = () => {

    return (
        <div className={s.sidebar}>
            <nav>
                <div><NavLink to='/profile' className={setActive}>Profile</NavLink></div>
                <div><NavLink to='/dialogs' className={setActive}>Messedges</NavLink></div>
                <div><NavLink to='/news' className={setActive}>News</NavLink></div>
                <div><NavLink to='/users' className={setActive}>Users</NavLink></div>
                <div><NavLink to='/music' className={setActive}>Music</NavLink></div>
                <div><NavLink to='/settings' className={setActive}>Setting</NavLink></div>
            </nav>
        </div>
    )
}


export default NavBar;