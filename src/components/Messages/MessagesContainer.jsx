import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        state: state.messagesP,
    }
}

export default compose(
    connect (mapStateToProps),
    withAuthRedirect
)(Messages)
