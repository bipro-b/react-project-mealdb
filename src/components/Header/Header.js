import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h2>Delicious Food store </h2>
            <nav>
                <a href="/Home">Home</a>
                <a href="/Food">Food</a>
                <a href="/More">More</a>
            </nav>
        </div>
    );
};

export default Header;