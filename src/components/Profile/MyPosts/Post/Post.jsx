import React from 'react';
import s from './Post.module.css';

const Post = (props) => {



    return (
        <div className={s.item}>
            <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                 alt=""/>
            {props.message}
            <div>
                <span>Likes</span> {props.likesCount}
            </div>
        </div>

    );
};

export default Post;