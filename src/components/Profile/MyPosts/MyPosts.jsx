import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    // debugger;
    const postsElements = props.posts.map(elem => {
        return <Post message={elem.message} like={elem.likeCouter} />
    })

    let newPostElement = React.createRef();



    let onAddPost = () => {
        props.addPost();
        // debugger;
        //props.dispatch(addPostActionCreate())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onChange(text);
        // props.dispatch(onChangeActionCreate(text))
    }
    return (
        <div className={s.my_post}>
            <div className={s.title}>My posts</div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} ></textarea>
                <div>
                    <button onClick={onAddPost}>Add new post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}


export default MyPosts;