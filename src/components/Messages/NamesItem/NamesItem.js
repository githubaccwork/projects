import React from 'react';
import s from './NamesItem.module.css';
import { NavLink } from 'react-router-dom';

const NamesItem = (props) => {
    let path = '/messages/' + props.id;
    
    return (
        <div className={s.namesItem + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default NamesItem;