import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-kasa.svg'

function Header(){

    const location = useLocation();

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt={"Logo de l'entreprise Kasa"}/>
            </Link>
            <nav className="header__nav">
                <Link to="/" className={location.pathname === '/' ? "header__nav__link underline" : "header__nav__link"}>Accueil</Link>
                <Link to="/a-propos" className={location.pathname === '/a-propos' ? "header__nav__link underline" : "header__nav__link"}>A propos</Link>
            </nav>
        </header>
    )
};

export default Header;