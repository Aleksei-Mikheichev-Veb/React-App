import React from 'react';
import { connect } from 'react-redux';
import { addMessageActiomCreate, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {

    return {
        newMessageText: state.messagesPage.newMessageText,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs
    }
}
let mapDispathToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActiomCreate());
        },
        onChange: (text) => {
            dispatch(updateNewMessageText(text));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs)


export default DialogsContainer;



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
