import React from 'react';
import './NavBar.scss';
import logo from './logo.png';

function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="" className="logo"/>
            <div className="menu-container">
                <ul>
                    <li><a href="/" className="navbar-link">
                        Home
                        </a>
                    </li>
                    <li><a href="/" className="navbar-link">
                        About
                        </a>
                    </li>
                    <li><a href="/" className="navbar-link active">
                        Tours
                        </a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default NavBar

