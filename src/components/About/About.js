import React from 'react';

import Card from 'react-bootstrap/Card';
import logoUrl from './georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg';

class About extends React.Component {
    render() {
        return (
            <Card bg='light' style={{margin: '10px auto', borderRadius: '0', border: '0', width: '60rem', backgroundColor: 'khaki'}}>
                <Card.Img variant="top" src={logoUrl} />
                <span style={{textAlign: 'center'}}>Photo by <a href="https://unsplash.com/@georgie_cobbs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Georgie Cobbs</a> on <a href="https://unsplash.com/s/photos/yellow?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                <Card.Body>
                <Card.Title style={{textAlign: 'center'}} > About Us </Card.Title>
                <Card.Text style={{textAlign: 'center'}} >
                    Made with ♡ by Alana Alfeche and Sahana Arya
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default About;