import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/'><h1>alka<span>BLOG</span></h1></Link>
        <div className="pages">
            <Link to='/'>Posts</Link>
            <Link to='/users'>Usuários</Link>
        </div>
    </div>
  )
}

export default Navbar
