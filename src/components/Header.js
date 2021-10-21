import React from 'react';
import "./Header.css";
import { Nav } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Nav className="header">
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <div><img src=".\Logo.png" alt="logo"/> FindProperty</div>
                    </div>
                </div>
            </div>
        </Nav>
    );
};

export default Header;
