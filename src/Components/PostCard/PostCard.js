import React from 'react'

export const PostCard = (props) => {
    const {post} = props;

    return (
        <div className='post'>
            <img scr={post.cover} alt={post.title} />
            <div className='post-card'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}
