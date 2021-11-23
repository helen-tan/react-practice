import React from 'react';
import "./Header.css";
/*import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src="logo.png" alt="logo" />

            <nav className="Nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#viewhomes">View homes</a>
                <a href="#contact">Contact</a>
            </nav>
            <button><img src="hamburger-icon.png"/></button>
        </header>
    );
};

export default Header;
