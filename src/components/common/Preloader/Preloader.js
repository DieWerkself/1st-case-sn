import s from './Preloader.module.css';
import React from "react";

const Preloader = () => {
    return (
        <div className={s.position}>
            <div className={s.loader_container}>
                <div className={s.loader}></div>
            </div>
        </div>
    )
}

export default Preloader;