import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './home.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import 'react-loading-skeleton/dist/skeleton.css'
import PostSkeleton from '../../components/PostSkeleton/PostSkeleton'
import Pagination from '../../components/Pagination/Pagination'

function Home() {
    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPosts(1,6,1)
        getAllPosts()
    }, [allPosts])

    useEffect(() => {
        if (posts.length > 0) {
            setLoading(false)
        }
    }, [posts])

    const getAllPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setAllPosts(res.data.length)
        })
    }
    
    const getPosts = (first,last,page) => {
        var endpoints = []

        for (var i=first; i<=last && i<=allPosts; i++) { 
            endpoints.push(`https://jsonplaceholder.typicode.com/posts/${i}/`)
        }
        
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
            setPosts(res)
        })
        
        setCurrentPage(page)

        setNext({
            first: first+6,
            last: last+6,
            page: page+1
        })

        setPrevious({
            first: first-6,
            last: last-6,
            page: page-1
        })
    }

    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const handlePage = (flow) => {
        (flow === 'next' ? getPosts(next.first, next.last, next.page) : getPosts(previous.first, previous.last, previous.page))
    }

  return (
    <>
        <Navbar />
        <div className='home'>

            <div className='posts-container'>
            {loading && <PostSkeleton cards={6} />}
            {posts.map((post) => (
                <motion.div initial={{y:5}} animate={{y:0}} transition={{ duration:0.5 }} className='post-card' key={post.data.id}>
                    <h2>{post.data.title}</h2>
                    <p>{post.data.body}</p>
                    <Link to={`/post/${post.data.id}`}><span >Leia mais...</span></Link>
                </motion.div>
            ))}
            </div>
            {!loading && (
                <Pagination currentPage={currentPage} handlePage={handlePage} allPosts={allPosts}/>
            )}
        </div>
    </>

  )
}

export default Home
