import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    const newMessageElement = React.createRef()
    const addMessage = () => {
        const text = newMessageElement.current.value
        alert(text)
    }
    const dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={
                        addMessage
                    }>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;