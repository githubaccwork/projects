import React from 'react';
import s from './Messages.module.css';
import NamesItem from './NamesItem/NamesItem';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reduser';

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = (body) => {
       props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Messages 
            updateNewMessageBody={onNewMessageChange} 
            sendMessage={onSendMessageClick}
            messagesPage={state} />
    );
}

export default MessagesContainer;