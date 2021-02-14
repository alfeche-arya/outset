import React from 'react';

import { Container } from 'react-bootstrap';

class Contact extends React.Component {
    render() {
        return (
            <Container style={{margin: '80px auto', width: '50em', backgroundColor: 'whitesmoke'}}>
                <div style={{padding: '20px 0px 0px 20px'}}>
                    <h4>Don't be shy and say hi! 👋 </h4>
                </div>
                <form style={{padding: '20px'}}>
                    <div class="form-group">
                        <label for="subject">Name</label>
                        <input type="email" class="form-control" id="subject"/>
                    </div>
                    <div class="form-group">
                        <label for="email-address-input">Email address</label>
                        <input type="email" class="form-control" id="email-address-input" placeholder="name@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="description">Message</label>
                        <textarea class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>        
            </Container>   
        )
    }
}

export default Contact;