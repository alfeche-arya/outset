import React from 'react';
import './Header.css';
import logoUrl from './outset_invert_transparent.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1> Create </h1>
                <img src={logoUrl} alt="Outset" />
                <h1> Visions </h1>
            </div>
        )
    }
}

export default Header;