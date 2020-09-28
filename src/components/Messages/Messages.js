import React from 'react';
import s from './Messages.module.css';
import NamesItem from './NamesItem/NamesItem';
import DialogsItem from './DialogsItem/DialogsItem';

const Messages = (props) => {

    const namesElements = props.state.namesData.map( name => <NamesItem name={name.name} id={name.id} />);

    const messagesElements = props.state.messagesData.map( message => <DialogsItem message={message.message} />);

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