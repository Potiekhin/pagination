import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate, setPostsPerPage}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            {pageNumbers.map(number => (
                <button key={number} onClick={()=>paginate(number)} className="btn btn-primary">
                    {number}
                </button>
            ))}
            <button onClick={()=>setPostsPerPage(postsPerPage*2)}>
                Load more...
            </button>
        </nav>
    )
}

export default Pagination