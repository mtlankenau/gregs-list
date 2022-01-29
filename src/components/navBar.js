import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

export default function navbar() {
    return (
        <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
       >
        <div className="container">
  
          <div className={`navbar-menu `}>
            <div className="navbar-start">
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/"
              >
                Main
              </NavLink>
  
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/about"
              >
                About Me
              </NavLink>
  
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
  
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/contact"
              >
                Contact Me
              </NavLink>
  
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/resume"
              >
                Resume
              </NavLink>
  
  
  
            </div>
  
          </div>
        </div>
      </nav>
      );
}