import React from 'react';
import './Header.scss';
import vectors from '../../assets/images/vectors.png';
import Hamburger from '../Hamburger/Hamburger';
const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Inner">
                <nav className="Header-Nav">
                    <ul to="/" className="Header-NavItem" activeclassname="Header-NavItem_active">proizvodi</ul>
                    <ul to="/" className="Header-NavItem" activeclassname="Header-NavItem_active">usluge</ul>
                    <ul to="/" className="Header-NavItem" activeclassname="Header-NavItem_active">tečajevi</ul>
                    <ul to="/" className="Header-NavItem" activeclassname="Header-NavItem_active">o nama</ul>
                </nav>
                <Hamburger />
                <nav to="/" className="Header-ButtonContainer">
                    <img src={vectors} className="Header-Vectors" />
                    <ul className="Header-Text">cjenik</ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;