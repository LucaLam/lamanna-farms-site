import React, { Component } from 'react'

import './header.scss';
import logo from "../../assets/logo.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo-container">
                    <img className="header__logo" src={logo} alt="Lamanna Farms"/>
                </div>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#shop" className="nav__link">Shop</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Place an Order</a></li>
                </ul>
            </div>
        )
    }
}

export default Header;
