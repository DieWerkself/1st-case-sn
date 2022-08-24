import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

let activeP = ({isActive}) => isActive ? s.dialog__active : s.dialog;

const DialogItem = (props) => {

    let Path = "/messages/" + props.id;

    return (
        <div className={s.user}>
            <div className={s.photo_a}>
                <img src={props.img} />
            </div>
            <div className={s.dialog}>
                <NavLink to={Path} className={activeP}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;
