import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt=""/><span>IPL - International Premier League</span>
            <Navigation></Navigation>
        </header>
    );
};

export default Header;