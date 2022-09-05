import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const NEW_TEXT = 'UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState =
    {
        posts: [
            {id: 1, count: 15, text: 'WTF is going on here?'},
            {id: 2, count: 20, text: 'No, no, no, noooooooo!!!'}
        ],
        newPost: '',
        profile: '',
    };


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPost,
                count: 0
            };
            return {
                ...state,
                newPost: '',
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case NEW_TEXT: {
            return {
                ...state,
                newPost: action.newPost
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const newTextActionCreator = (text) =>
    ({type: NEW_TEXT, newPost: text})

export const getProfile = (userId) => (dispatch) => {

    if (!userId) {
        usersAPI.auth().then(response => {
            if (response.resultCode === 0) {
                let {id} = response.data;
                debugger
                usersAPI.getProfile(id).then(response => {
                    dispatch(setUserProfile(response));
                })
            } else if (response.resultCode === 1) {
                usersAPI.getProfile(2).then(response => {
                dispatch(setUserProfile(response));
            })}
        })
    }  else {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    };
    debugger
}

export default profileReducer;