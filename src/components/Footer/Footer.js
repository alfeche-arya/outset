import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
    render() {
        return (
        <Navbar variant="dark" fixed="bottom" className="justify-content-center">
            <Navbar.Text> Copyright © 2021. Outset App. All rights reserved. </Navbar.Text>
        </Navbar>
        )
    }
}

export default Footer;