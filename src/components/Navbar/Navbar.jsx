import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiFillCloseSquare } from 'react-icons/ai'

function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleNavbar = () => (open ? setOpen(false) : setOpen(true))

  return (
    <div className='navbar'>
        <Link to='/'><h1>alka<span>BLOG</span></h1></Link>
        <button className='navbar-toggle' onClick={toggleNavbar}>
            <BiMenuAltRight className='navbar-btn'/>
        </button>
        <div className={open ? 'pages show' : 'pages'}>
            <Link className='pages-link' onClick={toggleNavbar} to='/'>Posts</Link>
            <Link className='pages-link users' onClick={toggleNavbar} to='/users'>Usuários</Link>
            <AiFillCloseSquare onClick={toggleNavbar} className='close' />
        </div>
    </div>
  )
}

export default Navbar
