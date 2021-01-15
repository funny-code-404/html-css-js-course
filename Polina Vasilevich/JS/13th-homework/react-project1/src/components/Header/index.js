import React from 'react';

import './styles.css'
class Header extends React.Component{
    handleHomeClick() {
        alert('It\'s button "Home".')
    }
    render() {
        return <header className = "header">
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-list-item" onClick={this.handleHomeClick}>Home</li>
                    <li className="header-nav-list-item">About</li>
                    <li className="header-nav-list-item">Servicing</li>
                    <li className="header-nav-list-item">Contact us</li>
                </ul>
            </nav>
        </header>
    }
}

export default Header;
