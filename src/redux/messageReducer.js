const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState =
    {
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
    };

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                text: state.newMessage,
                img: 'https://cdn-icons-png.flaticon.com/512/168/168724.png'
            };
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, newMessage]
            };
        }
        case NEW_TEXT: {
            return {
                ...state,
                newMessage: action.newMessage
            };
        }
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const newTextActionCreator = (text) =>
    ({type: NEW_TEXT, newMessage: text})

export default messageReducer;