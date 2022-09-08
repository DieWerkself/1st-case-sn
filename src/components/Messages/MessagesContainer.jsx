import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        state: state.messagesP,
    }
}

let redirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect (mapStateToProps) (redirectComponent);

export default MessagesContainer;
