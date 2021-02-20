import React from 'react';

import Card from 'react-bootstrap/Card';

import ImageUrl from './outset.png';

class LandingPage extends React.Component {
    render() {
        return (
            <Card.Img variant="top" src={ImageUrl} />
        );
    }
}

export default LandingPage;
