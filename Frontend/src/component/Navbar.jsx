import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul className='nav'>
            <h1 className='heading'>Frontend</h1>
            <li className="list">
              <Link to="home">Home</Link>
            </li>
            <li className="list">
              <Link to="about">About</Link>
            </li>
            <li className="list">
              <Link to="contact">Contact</Link>
            </li>
            <li className="list">
              <Link to="service">Service</Link>
            </li>
            <li className="list">
              <Link to="state">State</Link>
            </li>
            <li className="list">
              <Link to="effect">Effect</Link>
            </li>
            <li className="list">
              <Link to="userdata">Fetch User</Link>
            </li>
            <li className="list">
              <Link to="props">Props</Link>
            </li>
            <li className="list">
              <Link to="reducer">Reducer</Link>
            </li>
            <li className="list">
              <Link to="user">User</Link>
            </li>
            <li className="list">
              <Link to="course">Course</Link>
            </li>
            <li className="list">
              <Link to="/">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar