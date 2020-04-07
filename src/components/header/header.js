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
                    <li className="nav__item">About</li>
                    <li className="nav__item">Shop</li>
                    <li className="nav__item">Place an Order</li>
                </ul>
            </div>
        )
    }
}

export default Header;
