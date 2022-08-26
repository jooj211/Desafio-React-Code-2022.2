import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false} 

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render(){
        return (
            <nav className="navbar-items">
                <a href="/" className="navbar-logo"><img src="Logo.png" alt="Logo"></img></a>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className='nav-btn'>
                    <a href="login"><Button href="login" id="btn-login">Login</Button></a>
                </div>
            </nav>
        );
    }
}

export default Navbar;