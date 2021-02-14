import React from 'react';

import { Container } from 'react-bootstrap';


class Contact extends React.Component {
    render() {
        return (
            <Container class="border-0" style={{margin: '50px auto', backgroundColor: 'rgba(249,228,118,1)'}}>
                <form style={{padding: '20px'}}>
                    <div class="form-group">
                        <label for="email-address-input">Email address</label>
                        <input type="email" class="form-control" id="email-address-input" placeholder="name@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="subject">Title</label>
                        <input type="email" class="form-control" id="subject"/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>        
            </Container>   
        )
    }
}

export default Contact;