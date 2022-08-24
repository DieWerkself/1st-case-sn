import {connect} from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (state) => {
    return {
        state: state.sidebar
    }
}

const NewFriends = connect(mapStateToProps) (Friends);

export default NewFriends;

