import React from "react";
import logo from '../assets/images/logo-white.png'

function Footer(){
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt={"Logo de l'entreprise Kasa"}/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;