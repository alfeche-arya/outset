import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Jumbotron fluid>
                <Container>
                    <h1>Welcome to Outset</h1>
                    <p>
                    At Outset, we believe that social media can be good. Here you will find groups of people who encourage each other in completing goals, as small as they may be, because we know that small steps can lead to big results.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        <Button variant="primary">Create a vision board</Button>
                    </p>
                </Container>
                </Jumbotron>   
                <Footer /> 
            </>
        );
    }
}

export default LandingPage;
