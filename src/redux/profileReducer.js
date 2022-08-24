const ADD_POST = 'ADD-POST';
const NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState =
    {
        posts: [
            {id: 1, count: 15, text: 'WTF is going on here?'},
            {id: 2, count: 20, text: 'No, no, no, noooooooo!!!'}
        ],
        newPost: ''
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
export const newTextActionCreator = (text) =>
    ({type: NEW_TEXT, newPost: text})

export default profileReducer;