import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item mx-3">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item mx-3">
          <Link to="/add" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item mx-3">
          <Link to="/users" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
}
