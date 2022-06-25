const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [

    ]
}

const usersReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userId) {
                        return {
                            ...elem, followed: true
                        }
                    }
                    return elem
                })
            };

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userId) {
                        return {
                            ...elem, followed: false
                        }
                    }
                    return elem
                })
            };
        }
        case SET_USERS:
            if (state.users.length > 0) {
                return state
            }
            return {
                ...state,
                users: [...state.users, ...action.users],

            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;