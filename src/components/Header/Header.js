import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/><span>IPL - International Premier League</span>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;