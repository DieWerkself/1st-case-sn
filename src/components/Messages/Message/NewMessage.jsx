import s from './NewMessage.module.css';

const NewMessage = (props) => {

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.newUpdateText(text);
    }

    return (

        <div className={s.NewMessage}>
            <div>
                <textarea
                    onChange={onMessageChange}
                    value={props.newText}
                    placeholder='Напиши здесь сообщение'
                />
            </div>

            <div>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    );
}

export default NewMessage;
