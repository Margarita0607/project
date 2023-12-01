import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';
// import {Redirect} from "react-router-dom";
// import {Field, reduxForm} from "redux-form";
// import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
 let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator);
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.DialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Введите сообщение'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Отправить сообщение</button></div>
                </div>
            </div>

        </div>

    )

}
export default Dialogs;
