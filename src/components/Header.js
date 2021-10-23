import React from 'react';
import "./Header.css";
import { Nav } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Nav className="header">
            <div className="logo">
                <div><img src="logo.png" alt="logo"/> FindProperty</div>
            </div>
        </Nav>
    );
};

export default Header;
