import React from 'react';

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

class Visions extends React.Component {
    render() {
        return (
            <Container style={{marginTop: '10px'}}>
            <Card style={{borderRadius: '0', border: '0'}}>
                <Card.Body>
                <Card.Title>Visual Board #1</Card.Title>
                {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text> */}
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
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </Container>
        )
    }
}

export default Visions;