import React from 'react';
import "./Header.css";
import { Nav } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Nav className="header">
            <div className="logo">
                <img src="logo-white-resized.png" alt="logo"/>
            </div>
        </Nav>
    );
};

export default Header;
