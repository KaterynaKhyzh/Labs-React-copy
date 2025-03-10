import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="Header">
            <Link to="/">
                <h1>Flat UI Colors</h1>
            </Link>
        </header>
    );
}

export default Header;