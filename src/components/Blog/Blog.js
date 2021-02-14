import React from 'react';
import { Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

class Blog extends React.Component {
    render() {
        return (
            <Container style={{margin: "10px auto", width: '60rem'}}>
                <Card className="text-center" style={{borderRadius: "0", border: '0'}}>
                    <Card.Body>
                        <Card.Title>How we built Outset App (Product) </Card.Title>
                        <Card.Text style={{textAlign: "left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>By Sahana Arya, 2 days ago</Card.Footer>
                </Card>
                <br />
                <Card className="text-center" style={{borderRadius: "0", border: '0'}}>
                    <Card.Body>
                        <Card.Title>How we built Outset App (Technology) </Card.Title>
                        <Card.Text style={{textAlign: "left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>By Sahana Arya, 2 days ago</Card.Footer>
                </Card>
            </Container>
        )
    }
}

export default Blog;