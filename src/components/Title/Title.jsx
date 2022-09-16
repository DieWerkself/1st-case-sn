import s from './Title.module.css';
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assests/image/default-avatar.jpg";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

const Title = (props) => {
    return (
        <div className={s.headNav}>
            <div className={s.title}>
                Site name
            </div>
            <div className={s.auth}>
                {props.isAuth ? <>
                    <div className={s.photo_a}>
                        {props.profile.userId != null ? <img src={props.profile.photos.small != null ? props.profile.photos.small : defaultAvatar}/> : <Preloader />}
                </div>
                <div className={s.loginInfo}>
                    <div>{props.login != null ? props.login : <Preloader />}</div>
                    <div className={s.emailInfo}>ID:{props.profile.userId != null ? props.profile.userId : <Preloader />}</div>
                    <div className={s.emailInfo}>{props.email != null ? props.email : <Preloader />}</div>
                </div></> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    );
}

export default Title;

