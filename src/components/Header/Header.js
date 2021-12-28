import React, { useState } from 'react';
import "./Header.css";
/*import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Squash as Hamburger } from 'hamburger-react';

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className="header">
            <img className="logo" src="logo.png" alt="logo" />

            <div className="nav-items">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#viewhomes">View homes</a>
                <a href="#contact">Contact</a>
            </div>


            <div className="hamburger">
                <Hamburger onToggle={toggled => {
                    if (toggled) {
                        return (document.getElementById("nav-list").style.display = "block");
                    } else {
                        return (document.getElementById("nav-list").style.display = "none");
                    }
                }} />
            </div>

            <div id="nav-list">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#viewhomes">View homes</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </header>
    );
};

export default Header;
