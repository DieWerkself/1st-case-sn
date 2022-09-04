import s from './Title.module.css';
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assests/image/default-avatar.jpg";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

const Title = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.headNav}>
            <div className={s.title}>
                Site name
            </div>
            <div className={s.auth}>
                <div className={s.photo_a}>
                    <img src={props.profile.photos.small != null ? props.profile.photos.small : defaultAvatar}/>
                </div>
                {props.isAuth ? <div className={s.loginInfo}>
                    <div>{props.login}</div>
                    <div className={s.emailInfo}>ID:{props.profile.userId}</div>
                    <div className={s.emailInfo}>{props.email}</div>
                </div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    );
}

export default Title;

