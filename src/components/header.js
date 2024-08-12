// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}><a href='/' style={linkStyle}>Learn Using Flashcards</a></h1>
            <nav style={navStyle}>
                <ul style={navListStyle}>
                    <li style={navItemStyle}><a href="/categories" style={linkStyle}>Categories</a></li>
                    <li style={navItemStyle}><a href="/admin" style={linkStyle}>Admin</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Simple styles for the Header component
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white'
};

const titleStyle = {
    fontSize: '1.5em',
};

const navStyle = {
    display: 'flex',
};

const navListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '15px',
};

const navItemStyle = {
    fontSize: '1em',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
};

export default Header;
