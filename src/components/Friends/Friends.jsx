import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendElements = props.state.friends
        .map( f => <Friend name={f.name} id={f.id} key={f.id} img={f.img} /> );

    return (
        <div className={s.friends}>
            <div className={s.title}>
                <h4>Friends</h4>
            </div>
            <div className={s.friendElement}>
                {friendElements}
            </div>
        </div>
    );
}

export default Friends;

