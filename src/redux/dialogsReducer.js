const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: '1', message: 'Hi, how are you?' },
        { id: '2', message: 'What do you think about my english?' },
        { id: '3', message: 'Yo' },
        { id: '4', message: 'Yo' },
        { id: '5', message: 'Yo' }
    ],
    dialogs: [
        { id: '1', name: 'Aleksey' },
        { id: '2', name: 'Anastasia' },
        { id: '3', name: 'Sergei' },
        { id: '4', name: 'Dmitri' },
        { id: '5', name: 'Natasha' }
    ],
    newMessageText: 'отправь меня'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}


export const addMessageActiomCreate = () => ({ type: ADD_MESSAGE });

export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export default dialogsReducer;

// const dialogsReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case ADD_MESSAGE:
//             let newMessage = {
//                 id: 6,
//                 message: state.newMessageText
//             }
            
//             state.messages.push(newMessage);
//             state.newMessageText = '';
//             return state;
//         case UPDATE_NEW_MESSAGE_TEXT:
//             state.newMessageText = action.newText;
//             return state;
//         default:
//             return state;
//     }
// }