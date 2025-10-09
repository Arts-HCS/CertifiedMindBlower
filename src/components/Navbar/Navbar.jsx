import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/CMB-logo.png'
import ProfileButton from '../ProfileButton/ProfileButton'
import CartButton from '../CartButton/CartButton'
import { Link } from 'react-router-dom'

const Navbar = () => {

  useEffect(()=>{
    const navbar = document.getElementById('navbar')

    window.addEventListener('scroll', ()=>{
      if (window.scrollY > 677){
        navbar.classList.remove('scrolled-navbar')
        navbar.classList.add('super-scrolled-navbar')
      } else if (window.scrollY > 77){
        navbar.classList.add('scrolled-navbar')
        navbar.classList.remove('super-scrolled-navbar')
      } else{
        navbar.classList.remove('scrolled-navbar')
        navbar.classList.remove('super-scrolled-navbar')
      }
    })
  })

  return (
    <header className="header">
       <nav id='navbar' className='navbar'>
        <ul className='left-links'>
            <li>
              <Link to='/' className='link'>Home</Link>
            </li>
            <li>
              <Link to='/' className='link'>About</Link>
            </li>
            <li>
              <Link to='/' className='link'>Family</Link>
            </li>
            <li>
              <Link to='/' className='link'>Shop Now</Link>
            </li>
        </ul>
        <Link to='/' className='logo'>
          <img className='logo-img' src={logo} alt="Logo" />
        </Link>

        <div className='right-links'>
            <ProfileButton></ProfileButton>
            <CartButton></CartButton>
        </div>
       </nav>
    </header>
  )
}

export default Navbar