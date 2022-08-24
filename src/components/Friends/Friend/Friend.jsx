import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div>
                <img src={props.img}/>
            </div>
            <div className={s.name}>
                <div>
                    ID: {props.id}
                </div>
                <div>
                    {props.name}
                </div>
            </div>

        </div>
    );
}

export default Friend;

