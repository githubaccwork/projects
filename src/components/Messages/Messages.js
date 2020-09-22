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

const Messages = (props) => {

    const namesData = [
        {id: 1, name: 'Vitalii'},
        {id: 2, name: 'Helga'},
        {id: 3, name: 'Boris'},
        {id: 4, name: 'Doris'},
        {id: 5, name: 'Natasha'},
        {id: 6, name: 'Anastasiya'}
    ];

    const messagesData = [
        {id: 1, message: 'Hi !'},
        {id: 2, message: 'Hello everyone !'},
        {id: 3, message: 'Hi there !'},
        {id: 4, message: 'Oh, hello.'},
        {id: 5, message: 'Let start dialog ?'},
        {id: 6, message: 'Ha-ha...'}
    ];

    const namesElements = namesData.map( name => <NamesItem name={name.name} id={name.id} />);

    const messagesElements = messagesData.map( message => <DialogsItem message={message.message} />);

    return (
        <div className={s.messages}>
            <div className={s.names}>
                { namesElements }
            </div>
            
            <div className={s.dialogs}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Messages;