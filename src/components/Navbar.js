import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function NavbarComponent() {
  return (
    <div>
      <Navbar bg="light" className="navbar-fixed-top" variant="light" expand="lg">
        <Link class="navbar-brand" to="/"><img src={Logo} style={{height: 50}}  alt="Logo"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
          <Nav className="mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/stats">STATS</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/feedback">FEEDBACK</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/references">REFERENCES</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/introduction">INTRODUCTION</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
