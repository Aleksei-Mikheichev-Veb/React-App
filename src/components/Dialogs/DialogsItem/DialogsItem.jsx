import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const setActive = ({ isActive }) => isActive ? s.dialogs_item_active : s.dialogs_item;

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={setActive}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;