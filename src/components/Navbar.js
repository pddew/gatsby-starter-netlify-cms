import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
    
      <div className="navbar-brand">
      <Link to="/" className="navbar-item">
          <h1>Immediate Start Jobs</h1>
        </Link> 
      </div>
      <div className="navbar-start">

        <Link className="navbar-item" to="/about">
          About
        </Link>

        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end button">
        <a
          className="navbar-item"
          href="https://pddew.typeform.com/to/c7GRuU"
          target="_blank"
          rel="noopener noreferrer"
        >
        Post a job ad
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
