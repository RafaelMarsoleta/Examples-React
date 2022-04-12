import React from 'react'
import { PostCard } from '../PostCard/PostCard'

export const Posts = (posts) => {
    
    return (
        <div className='posts'>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    cover={post.cover}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    post={post}
                />
            ))}
        </div>
    )
}




