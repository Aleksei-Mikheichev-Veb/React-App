import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hey, i am relax', likeCouter: 0 },
                { id: 2, message: 'i am learn React', likeCouter: 24 },
                { id: 3, message: 'Yo', likeCouter: 13 },
            ],
            newPostText: 'It-kamasutra'
        },
        messagesPage: {
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
    },
    _callSubscriber() {
        console.log('yoyoyo')
    },



    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action) {

        this._action = profileReducer(this._state.profilePage, action);
        this._action = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    },
}



window.state = store;


export default store;

