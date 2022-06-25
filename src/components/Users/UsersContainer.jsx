import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
    }
}
let mapDispathToProps = (dispatch) => {
    // debugger;
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unFollow: (usersId) => {
            dispatch(unFollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);


export default UsersContainer;



// const DialogsContainer = (props) => {
//     return <StoreContext.Consumer>{
//         (store) => {
//             let state = store.getState();


//             let addMessage = () => {
//                 store.dispatch(addMessageActiomCreate());

//             }
//             let onChange = (text) => {
//                 store.dispatch(updateNewMessageText(text));
//             }
//             // debugger;

//             return (<Dialogs
//                 addMessage={addMessage}
//                 onChange={onChange}
//                 dialogs={state.messagesPage.dialogs}
//                 messages={state.messagesPage.messages}
//                 newMessageText={state.messagesPage.newMessageText}
//             />)
//         }
//     }

//     </StoreContext.Consumer>
// }
