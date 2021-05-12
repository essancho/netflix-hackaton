import { Facebook, FaceRounded, Instagram, YouTube } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-icons">
                    <Facebook className="footer-icon" fontSize="large" />
                    <Instagram className="footer-icon" fontSize="large" />
                    <YouTube className="footer-icon" fontSize="large" />
                </div>
                <div className="footer-list-container">
                    <ul className="footer-list">
                        <a href="#">
                            <li>Audio and Subtitles</li>
                        </a>
                        <a href="#">
                            <li>Media Center</li>
                        </a>
                        <a href="#">
                            <li>Privacy</li>
                        </a>
                        <a href="#">
                            <li>Contact Us</li>
                        </a>
                    </ul>
                    <ul className="footer-list">
                        <a href="#">
                            <li>Audio Description</li>
                        </a>
                        <a href="#">
                            <li>Investor Relations</li>
                        </a>
                        <a href="#">
                            <li>Legal Notices</li>
                        </a>
                    </ul>
                    <ul className="footer-list">
                        <a href="#">
                            <li>Help Center</li>
                        </a>
                        <a href="#">
                            <li>Jobs</li>
                        </a>
                        <a href="#">
                            <li>Cookie Preferences</li>
                        </a>
                    </ul>
                    <ul className="footer-list">
                        <a href="#">
                            <li>Gift Cards</li>
                        </a>
                        <a href="#">
                            <li>Terms of Use</li>
                        </a>
                        <a href="#">
                            <li>Corporate Information</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
