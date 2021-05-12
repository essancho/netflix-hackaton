import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logos/netflix-logo.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="home">
            <div className="home-wrapper">
                <div className="navbar-main">
                    <div className="navbar-logo">
                        <img className="netflix-logo" src={Logo} alt="" />
                    </div>
                    <div>
                        <Link to="/login">
                            <button className="btn-sign-in">Sign In</button>
                        </Link>
                    </div>
                </div>
                <div className="home-text-wrapper">
                    <h1 className="home-text">
                        Unlimited movies, TV <br /> shows, and more.
                    </h1>
                    <p className="home-subtext">
                        Watch anywhere. Cancel anytime.
                    </p>
                    <p className="home-desc-text">
                        Ready to watch? Sign Up to create or restart your
                        membership.
                    </p>
                    <Link to="/signup">
                        <button className="btn-signup">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
