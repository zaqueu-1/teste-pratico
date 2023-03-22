import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './users.css'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const loadUsers = async() => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(res.data)
        }
        loadUsers()
    }, [])

    const handleSearch = async (text) => {
        if (text === '') {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
          setUsers(res.data)
        } else {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/users?username_like=${text}`)
          setUsers(res.data)
        }
      }
      
  return (
    <>
      <Navbar />
      <div className="users-wrapper">
        <div className="search">
            <input type="text" onChange={(e) => handleSearch(e.target.value.toLocaleLowerCase())} placeholder="Pesquisar usuário" />
        </div>
        <div className="users-container">
            {users.map((user) => (
                <motion.div initial={{y:10}} animate={{y:0}} transition={{ duration:0.5 }} className="user-card" key={user.id}>
                    <Link className='card-link' to={`/user/${user.id}`}><h1>{user.username}</h1></Link>
                </motion.div>
            ))}
        </div>
        <Link to='/'><button className="return">Voltar</button></Link>
      </div>
    </>
  )
}

export default Users
