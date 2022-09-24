import {authAPI, profileAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH';

let initialState =
    {
        userId: null,
        login: null,
        email: null,
        profile: '',
        isFetching: false,
        isAuth: false
    };

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_AUTH: {
            return {
                ...state,
                isAuth: true
            }
        }
        case SET_MY_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}


export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})
export const setUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login}, isAuth})
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile})

export const authMe= () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.auth().then(response => {
        dispatch(toggleIsFetching(false));
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setUserData(id, login, email));
            usersAPI.getProfile(id).then(response => {
                dispatch(setMyProfile(response));
            })
        }
    });
}

export const authProfile = (data) => (dispatch) => {
    authAPI.authLogin(data).then((response) => {
        if (response.resultCode === 0) {
            let {userId} = response.data;
            profileAPI.getProfile(userId).then((response) => {
                console.log(response)
                dispatch(setMyProfile(response));
                dispatch(toggleIsAuth(true));
            });
            usersAPI.auth().then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    dispatch(setUserData(id, login, email));
                }
            });
        }
    })
};

export default AuthReducer;