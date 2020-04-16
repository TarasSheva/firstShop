import React from "react";

export const Posts = ({posts}) => {

    return (
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            ))}
        </ul>
    )
};