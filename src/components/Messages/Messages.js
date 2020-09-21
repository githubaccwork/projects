import React from 'react';
import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const NamesItem = (props) => {
    let path = '/messages/' + props.id;
    
    return (
        <div className={s.namesItem + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const DialogsItem = (props) => {
    return (
        <div className={s.dialogsItem}>{props.message}</div>
    );
}

const Messages = () => {

    const messagesData = [
        {id: 1, name: 'Vitalii'},
        {id: 2, name: 'Helga'},
        {id: 3, name: 'Boris'},
        {id: 4, name: 'Doris'},
        {id: 5, name: 'Natasha'},
        {id: 6, name: 'Anastasiya'}
    ];

    return (
        <div className={s.messages}>
            <div className={s.names}>
                <NamesItem name='Vitalii' id='1' />
                <NamesItem name='Helga' id='2' />
                <NamesItem name='Boris' id='3' />
                <NamesItem name='Doris' id='4' />
                <NamesItem name='Natasha' id='5' />
                <NamesItem name='Anastasiya' id='6' />
            </div>
            
            <div className={s.dialogs}>
                <DialogsItem message='Hi'/>
                <DialogsItem message='Hello everyone!'/>
                <DialogsItem message='Hi there.'/>
                <DialogsItem message='Oh, hello !'/>
            </div>
        </div>
    );
}

export default Messages;