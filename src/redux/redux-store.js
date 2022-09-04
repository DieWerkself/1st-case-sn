import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
        profileP: profileReducer,
        messagesP: messageReducer,
        sidebar: sidebarReducer,
        usersP: usersReducer,
        auth: authReducer
    }
);

let store = createStore(reducers);



export default store;
window.state = store
