import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.person}>
                <img src="https://cdn1.flamp.ru/3d883d4bb9e3bfa25a8340615b116a80.jpg" alt="" className={s.avatar} />
                <div className={s.nickname}>Алексей</div>
            </div>

            <div className={s.text}>{props.message}</div>
            <div>
                <span className={s.like}>like {props.like}</span>
            </div>
        </div>
    )
}


export default Post;