import React from 'react';
import s from './DialogsItem.module.css';

const DialogsItem = (props) => {
    return (
        <div className={s.dialogsItem}>{props.message}</div>
    );
}

export default DialogsItem;