import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './users.css'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { HiSearchCircle } from 'react-icons/hi'
import 'react-loading-skeleton/dist/skeleton.css'
import UsersSkeleton from '../../components/UsersSkeleton/UsersSkeleton' 

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadUsers = async() => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(res.data)
            setLoading(false)
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
            <HiSearchCircle className='search-icon'/>
            <input type="text" onChange={(e) => handleSearch(e.target.value.toLocaleLowerCase())} placeholder="Pesquisar usuário" />
        </div>
        <div className="users-container">
          {loading && <UsersSkeleton cards={10} />}
            {users.map((user) => (
              <Link className='card-link' to={`/user/${user.id}`}>
                <motion.div initial={{y:10}} animate={{y:0}} transition={{ duration:0.5 }} className="user-card" key={user.id}>
                      <FaUserCircle className='user-icon'/>
                      <h1>{user.username}</h1>
                </motion.div>
              </Link>
            ))}
        </div>
        {!loading && (
          <Link to='/'><button className="return">Voltar</button></Link>
        )}
      </div>
    </>
  )
}

export default Users
