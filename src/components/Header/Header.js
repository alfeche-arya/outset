import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logoUrl from './outset.png';

class Header extends React.Component {
    render() {
        return (
        <Navbar variant="light" style={{boxShadow: "0 2px 4px rgb(0 0 0 / 10%)"}}>
            <img
                alt=""
                src={logoUrl}
                width="30"
                height="30"
            />
            <Navbar.Brand href="/outset/#/" style={{marginLeft: "2px", marginRight: "20px"}}>
                <b>utset</b>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/outset/#/about"> About </Nav.Link> 
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