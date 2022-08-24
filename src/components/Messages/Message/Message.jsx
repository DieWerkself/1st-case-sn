import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div>
                <img src={props.img} />
            </div>
            <div className={s.text}>
                {props.text}
            </div>
        </div>
    );
}

export default Message;
