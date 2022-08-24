import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        state: state.messagesP
    }
}

const MessagesContainer = connect (mapStateToProps) (Messages);

export default MessagesContainer;
