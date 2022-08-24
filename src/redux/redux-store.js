import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
        profileP: profileReducer,
        messagesP: messageReducer,
        sidebar: sidebarReducer,
        usersP: usersReducer
    }
);

let store = createStore(reducers);

export default store;

window.state = store;