import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const NEW_TEXT = "UPDATE-NEW-TEXT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";

let initialState = {
  posts: [
    { id: 1, count: 15, text: "WTF is going on here?" },
    { id: 2, count: 20, text: "No, no, no, noooooooo!!!" },
  ],
  newPost: "",
  profile: "",
  status: "",
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        text: state.newPost,
        count: 0,
      };
      return {
        ...state,
        newPost: "",
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS_PROFILE: {
      return {
        ...state,
        status: action.status,
      };
    }
    case NEW_TEXT: {
      return {
        ...state,
        newPost: action.newPost,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatusProfile = (status) => ({
  type: SET_STATUS_PROFILE,
  status,
});

export const newTextActionCreator = (text) => ({
  type: NEW_TEXT,
  newPost: text,
});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

// export const getUserStatus = (userId) => (dispatch) => {
//   profileAPI.getStatus(userId).then((response) => {
//     dispatch(setStatusProfile(response));
//   });
// };

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) dispatch(setStatusProfile(status));
  });
};

export const getProfile = (userId) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  if (!userId) {
    usersAPI.auth().then((response) => {
      if (response.resultCode === 0) {
        let { id } = response.data;
        usersAPI.getProfile(id).then((response) => {
          dispatch(setUserProfile(response));
        });
        profileAPI.getStatus(id).then((response) => {
          dispatch(setStatusProfile(response));
        });
      }
    });
  } else {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatusProfile(response));
    });
  }
  dispatch(toggleIsFetching(false));
};

export default profileReducer;
