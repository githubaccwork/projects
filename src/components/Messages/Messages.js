import React from 'react';
import s from './Messages.module.css';

const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.names}>
                <div className={s.namesItem + ' ' + s.active}>
                    Person 1
                </div>
                <div className={s.namesItem}>
                    Person 2
                </div>
                <div className={s.namesItem}>
                    Person 3
                </div>
                <div className={s.namesItem}>
                    Person 4
                </div>
            </div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    Message 1
                </div>
                <div className={s.dialogsItem}>
                    Message 2
                </div>
                <div className={s.dialogsItem}>
                    Message 3
                </div>
                <div className={s.dialogsItem}>
                    Message 4
                </div>
            </div>
        </div>
    );
}

export default Messages;