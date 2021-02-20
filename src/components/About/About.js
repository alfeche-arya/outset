import React from 'react';

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Container style={{margin: '80px auto', width: '50em'}}>
                <Card style={{borderRadius: '0', border: '0', backgroundColor: 'whitesmoke'}}>
                    <Card.Body>
                    <Card.Title style={{textAlign: 'center'}} > Welcome to Outset </Card.Title>
                    <Card.Text style={{textAlign: 'center'}} >
                        Made with ♡ by Alana Alfeche and Sahana Arya
                    </Card.Text>
                    <Card.Text style={{textAlign: 'justify'}}>
                        At Outset, we believe that social media can be good. Here you will find groups of people who encourage each other in completing goals, as small as they may be, because we know that small steps can lead to big results.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default About;