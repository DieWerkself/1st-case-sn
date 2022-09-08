import s from './Messages.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessageContainer from "./Message/NewMessageContainer";
import Login from "../Login/Login";
import {Navigate} from "react-router-dom";


const Messages = (props) => {

    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} /> );

    let messagesElements = props.state.messages
        .map( m => <Message text={m.text} key={m.id} img={m.img}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <NewMessageContainer
                />
            </div>
        </div>
    );
}

export default Messages;
