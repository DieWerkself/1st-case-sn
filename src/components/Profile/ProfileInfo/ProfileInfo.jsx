import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import lookingForAJob from "../../../assests/image/lookingForAJob.png";
import React from "react";
import defaultAvatar from "../../../assests/image/default-avatar.jpg";

const ProfileInfo = (props) => {
    if(!props.profile) {

        return <Preloader />
    }
    return (
        <div>
            <div className={s.photo_h}>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg"/>
            </div>
            <div className={s.profileInfo}>
                <div className={s.photo_a}>
                    <img src={props.profile.photos.small != null ? props.profile.photos.small : defaultAvatar}/>
                </div>
                <div className={s.allInfo}>
                    <div className={s.fullName}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.aboutMe}>
                        {props.profile.aboutMe!= null ? props.profile.aboutMe : "Я пока не заполнил описание!"}
                    </div>
                </div>
                    { props.profile.lookingForAJob ?
                        <div className={s.job}>
                            <div><img src={lookingForAJob}/></div>
                            <div>{props.profile.lookingForAJobDescription}</div>
                        </div>
                        : 'Работу не ищу!'}
            </div>
        </div>
    );
}

export default ProfileInfo;
