import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";

const activeL = ({isActive}) => isActive ? s.active : s.item;

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <nav>
                <div>
                    <NavLink to="/profile" className={activeL}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/messages" className={activeL}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={activeL}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className={activeL}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className={activeL}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to="/users" className={activeL}>All Users</NavLink>
                </div>
            </nav>
            <div>
                <FriendsContainer />
            </div>
        </div>
    );
}

export default Navbar;
