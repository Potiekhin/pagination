import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Posts from './components/Posts';
import Pagination from "./components/Pagination";

function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)

    console.log(posts);

    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(url)
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">works</h1>
            <Posts posts={currentPost} loading={loading}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                setPostsPerPage={setPostsPerPage}/>
        </div>
    );
}

export default App;
