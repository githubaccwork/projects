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

    return (
        <div className={s.messages}>
            <div className={s.names}>
                <NamesItem name={namesData[0].name} id={namesData[0].id} />
                <NamesItem name={namesData[1].name} id={namesData[1].id} />
                <NamesItem name={namesData[2].name} id={namesData[2].id} />
                <NamesItem name={namesData[3].name} id={namesData[3].id} />
                <NamesItem name={namesData[4].name} id={namesData[4].id} />
                <NamesItem name={namesData[5].name} id={namesData[5].id} />
                
            </div>
            
            <div className={s.dialogs}>
                <DialogsItem message={messagesData[0].message} />
                <DialogsItem message={messagesData[1].message} />
                <DialogsItem message={messagesData[2].message} />
                <DialogsItem message={messagesData[3].message} />
                <DialogsItem message={messagesData[4].message} />
                <DialogsItem message={messagesData[5].message} />
            </div>
        </div>
    );
}

export default Messages;