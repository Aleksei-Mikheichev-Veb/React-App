import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Message';



const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id} />
    })

    let messageElements = props.messages.map(elem => {
        return <Message message={elem.message} id={elem.id} />
    })

    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage();

    }
    let onSandChange = () => {
        let text = newMessage.current.value;

        props.onChange(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__names}>
                {dialogElements}
            </div>
            <div className={s.dialogs__messages}>
                {messageElements}
                <div className={s.boxTextarea}>
                    <textarea onChange={onSandChange} ref={newMessage} placeholder={'Send message'} value={props.newMessageText}></textarea>
                </div>
                <button onClick={onAddMessage}>Send message</button>
            </div>
        </div>
    )
}


export default Dialogs;