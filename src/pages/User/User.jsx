import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './user.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'


function User() {
    const { id } = useParams()

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const loadCurrentUser = async() => {
          const res =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setCurrentUser(res.data)
            console.log(res.data)
        }
        loadCurrentUser()
      }, [])

  return (
    <>
        <Navbar />
        <div className='user-details'>
        <motion.div initial={{y:10}} animate={{y:0}} transition={{ duration:0.5 }} className="user-info">
            {currentUser ? 
                <div className='personal-data'>
                    <h2>Dados Pessoais</h2>
                    <p><span>Usuário:</span> {currentUser.username}</p> 
                    <p><span>Nome:</span> {currentUser.name}</p> 
                    <p><span>Email:</span> {currentUser.email}</p>
                    <p><span>Telefone:</span> {currentUser.phone}</p>
                    <p><span>Site:</span> {currentUser.website}</p>
                    <p><span>Endereço:</span> {currentUser.address?.street}, {currentUser.address?.suite} - {currentUser.address?.city} ({currentUser.address?.geo?.lat}, {currentUser.address?.geo?.lng})</p>
                    <p><span>Código Postal:</span> {currentUser.address?.zipcode}</p>
                </div>
             : null }
            {currentUser ?
                <div className='company-data'>
                    <h2>Dados da Empresa</h2>
                    <p><span>Nome da Empresa:</span> {currentUser.company?.name}</p>
                    <p><span>Slogan:</span> {currentUser.company?.catchPhrase}</p>
                    <p><span>BS:</span> {currentUser.company?.bs}</p>
                </div>
            : null }

            <Link to='/users'><button className="return">Voltar</button></Link>

        </motion.div>

        </div>
      
    </>
  )
}

export default User
