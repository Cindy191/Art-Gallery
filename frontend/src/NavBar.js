import React from 'react';
import { Link } from 'react-router-dom';
import navBarCSS from './navBar.css';

function NavBar() {
  return (
    <div>
        <nav>
            <Link to = "/" id="home-Button">Home</Link>
        </nav>
    </div>
  )
}

export default NavBar;