import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-kasa.svg'

function Header(){
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt={"Logo de l'entreprise Kasa"}/>
            <nav className="header__nav">
                <Link to="/" className="header__nav__link">Accueil</Link>
                <Link to="/a-propos" className="header__nav__link">A propos</Link>
            </nav>
        </header>
    )
};

export default Header;