import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faTwitter, faInstagram, faMedium, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">

            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-4 offset-sm-1">
                    <div className="text-center">
                        <h5>Thank you for visiting this page</h5>
                        <p className="footer-message">Do check out the GitHub repo for this project
                            to find out more about the source code for this project.
                            You may find the link to the repo by clicking on the GitHub icon on the right.
                        </p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-7">
                    <div className="text-center">
                        <h5>Follow me on Social Media</h5>
                        <a href="https://github.com/helen-tan/react-practice" className="github social">
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </a>
                        <a href="https://github.com/helen-tan/react-practice" className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>
                        <a href="https://github.com/helen-tan/react-practice" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                        </a>
                        <a href="https://github.com/helen-tan/react-practice" className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        </a>
                        <a href="https://github.com/helen-tan/react-practice" className="linkedin social">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                        </a>
                        <a href="https://github.com/helen-tan/react-practice" className="medium social">
                            <FontAwesomeIcon icon={faMedium} size="2x"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;