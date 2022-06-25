import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreate, onChangeActionCreate } from '../../../redux/profileReducer';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreate());
        },
        onChange: (text) => {
            dispatch(onChangeActionCreate(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);






export default MyPostsContainer;


// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreate())
//                     }

//                     let onChange = (text) => {
//                         // let text = newPostElement.current.value;
//                         store.dispatch(onChangeActionCreate(text))
//                     }
//                     return <MyPosts
//                         addPost={addPost}
//                         onChange={onChange}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText} />
//                 }
//             }

//         </StoreContext.Consumer>
//     )

// }