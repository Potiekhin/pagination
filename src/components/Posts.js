import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading){
return <h2>Loading...</h2>
    }
    return (
        <div className="list-group mb-4">
            {posts.map(post=>(
                <div key={post.id} className="list-group-item">
                    {post.title}
                </div>
            ))}
        </div>
    )
}

export default Posts
