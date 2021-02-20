import React from 'react';

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

class Visions extends React.Component {
    render() {
        return (
            <Container style={{margin: '80px auto', width: '50em'}}>
            <Card>
                <Card.Body>
                <Card.Title>Vision Board #1</Card.Title>
                <form>
                    <div class="form-group">
                        <input class="form-control" placeholder="Win the olympics" readOnly/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Become the president"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Get married"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Placeholder #4"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Placeholder #5"/>
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>        

                </Card.Body>
                <Card.Footer style={{backgroundColor: "white"}}>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </Container>
        )
    }
}

export default Visions;