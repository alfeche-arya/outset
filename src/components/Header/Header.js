import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logoUrl from './outset_invert_transparent.png';

class Header extends React.Component {
    render() {
        return (
        <Navbar variant="dark" style={{marginTop: '10px', fontSize: 'large'}}>
            <Navbar.Brand href="/outset/#/">
            <img
                alt=""
                src={logoUrl}
                width="30"
                height="30"
                className="d-inline-block align-top"
            /> <b>u t s e t</b>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/outset/#/about"> About Us </Nav.Link> 
                    <Nav.Link href="/outset/#/contact"> Contact Us </Nav.Link> 
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/outset/#/visions">My Vision Boards</Nav.Link>
                <Navbar.Text> Signed in as: <a href="/outset/#/login">Alana Alfeche</a> </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Header;