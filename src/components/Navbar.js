import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './component-styles.css'

export default function NavbarComponent() {
  return (
    <div>
      <Navbar bg="light" className="navbar-fixed-top" variant="light" expand="lg">
        {/* <Link className="navbar-brand" to="/">HOME</Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/introduction">INTRODUCTION</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bibliography">BIBLIOGRAPHY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stats">STATS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">FEEDBACK</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
        {/* <Link className="navbar-brand" to="/"><img src={Logo} className="erclogo" alt="Logo"/></Link> */}
    </Navbar>
    </div>
  )
}
