import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <header className={s.header}>
                <NavLink to="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png'/>
                </NavLink>
            </header>
    );
}

export default Header;

