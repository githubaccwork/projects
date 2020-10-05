import React from 'react';
import s from './Messages.module.css';
import NamesItem from './NamesItem/NamesItem';
import DialogsItem from './DialogsItem/DialogsItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reduser';

const Messages = (props) => {

    let state = props.store.getState().messagesPage;

    const namesElements = state.namesData.map( name => <NamesItem name={name.name} id={name.id} />);
    const messagesElements = state.messagesData.map( message => <DialogsItem message={message.message} />);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.messages}>
            <div className={s.names}>
                { namesElements }
            </div>
            
            <div className={s.dialogs}>
                <div>{ messagesElements }</div>
                <div>
                    <textarea value={newMessageBody} 
                                onChange={onNewMessageChange}
                                placeholder='Enter your message...'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;