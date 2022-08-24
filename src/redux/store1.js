import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

let store1 = {
    _state:  {
        profileP: {
            posts: [
                {id: 1, count: 15, text: 'WTF is going on here?'},
                {id: 2, count: 20, text: 'No, no, no, noooooooo!!!'}
            ],
            newPost: ''
        },
        messagesP: {
            dialogs: [
                {
                    id: 1,
                    name: 'Андрей',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168724.png'
                },
                {
                    id: 2,
                    name: 'Виктор',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168726.png'

                },
                {
                    id: 3,
                    name: 'Валерия',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168720.png'
                },
                {
                    id: 4,
                    name: 'Геннадий',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168723.png'
                },
                {
                    id: 5,
                    name: 'Егор',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168719.png'
                },
                {
                    id: 6,
                    name: 'Евгений',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168732.png'
                }
            ],
            messages: [
                {
                    id: 1,
                    text: 'Hello!',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168724.png'
                },
                {
                    id: 2,
                    text: 'How are you?',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168724.png'
                },
                {
                    id: 3,
                    text: 'What are you doing, man?',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168724.png'
                }
            ],
            newMessage: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Андрей',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168724.png'
                },
                {
                    id: 2,
                    name: 'Виктор',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168726.png'

                },
                {
                    id: 3,
                    name: 'Валерия',
                    img: 'https://cdn-icons-png.flaticon.com/512/168/168720.png'
                }
            ]
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profileP = profileReducer(this._state.profileP, action);
        this._state.messagesP = messageReducer(this._state.messagesP, action);
        this._callSubscriber();
    }
}

export default store1;

window.state = store1;