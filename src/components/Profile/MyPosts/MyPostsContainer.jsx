import React from "react";
import {addPostActionCreator, newTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profileP.posts,
        newText: state.profileP.newPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (newText) => {
            dispatch(newTextActionCreator(newText));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
