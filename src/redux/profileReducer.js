import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const NEW_TEXT = "UPDATE-NEW-TEXT";
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
};
debugger;

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
};

export default profileReducer;
