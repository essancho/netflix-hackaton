import React from "react";
import Popular from "./Popular";
import "./Main.css";
import MainNavbar from "./MainNavbar";
import Cover from "./Cover";

import Cartoon from "./Cartoon";
import Anime from "./Anime";
import Action from "./Action";
import Comedy from "./Comedy";
import Footer from "./Footer";

const Main = () => {
    return (
        <div className="main-container">
            <MainNavbar />
            <Cover />
            <Anime />
            <Popular />
            <Comedy />
            <Cartoon />
            <Action />
            <Footer />
        </div>
    );
};

export default Main;
