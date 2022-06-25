const ADD_POST = 'ADD-POST';
const UPDATE_NEW_ACTION_CREATE = 'UPDATE-NEW-ACTION-CREATE';

let initialState = {
    posts: [
        { id: 1, message: 'Hey, i am relax', likeCouter: 0 },
        { id: 2, message: 'i am learn React', likeCouter: 24 },
        { id: 3, message: 'Yo', likeCouter: 13 },
    ],
    newPostText: 'It-kamasutra'
}

const profileReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {

        case ADD_POST:

            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounter: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_ACTION_CREATE: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        default:
            return state;
    }

}

export const addPostActionCreate = () => ({ type: ADD_POST })
export const onChangeActionCreate = (text) => {
    return {
        type: UPDATE_NEW_ACTION_CREATE,
        newText: text
    }
}

export default profileReducer;