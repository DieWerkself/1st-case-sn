import React from "react";
import {addMessageCreator, newTextActionCreator} from "../../../redux/messageReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newText: state.messagesP.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newUpdateText: (newText) => {
            dispatch(newTextActionCreator(newText))
        },
        addMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}
const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps) (NewMessage);

export default NewMessageContainer;
