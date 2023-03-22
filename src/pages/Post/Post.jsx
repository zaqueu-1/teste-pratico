import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './post.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'


function Post() {
    const { id } = useParams()

    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
      const loadPost = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPost(res.data)
      }
      loadPost()
    }, [])

    useEffect(() => {
        const loadComments = async() => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            setComments(res.data)
        }
        loadComments()
    }, [])

  return (
    <>
        <Navbar />
        <div className='post-details'>
        <motion.div initial={{y:10}} animate={{y:0}} transition={{ duration:0.5 }} className="post-info">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </motion.div>

        <motion.div initial={{y:20}} animate={{y:0}} transition={{ duration:0.8 }} className="comments-container">
            {comments.map((comment) => (
                <div className='comment-card' key={comment.id}>
                    <span>{comment.email}</span>
                    <h3 id='comment-title'>{comment.name}</h3>
                    <p id='comment-text'>{comment.body}</p>
                </div>
            ))}

        </motion.div>

        <Link to='/'><button className="return">Voltar</button></Link>
    </div>
    
    </>
  )
}

export default Post
