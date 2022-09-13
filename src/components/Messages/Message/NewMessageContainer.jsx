import React from "react";
import {addMessageCreator, newTextActionCreator} from "../../../redux/messageReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(NewMessage)
