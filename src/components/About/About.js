import React from 'react';

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

import logoUrl from './georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg';

class About extends React.Component {
    render() {
        return (
            <Container>
                <Card bg='light' style={{margin: '10px auto', borderRadius: '0', border: '0', backgroundColor: 'khaki'}}>
                    <Card.Img variant="top" src={logoUrl} />
                    <span style={{textAlign: 'center'}}>Photo by <a href="https://unsplash.com/@georgie_cobbs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Georgie Cobbs</a> on <a href="https://unsplash.com/s/photos/yellow?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                    <Card.Body>
                    <Card.Title style={{textAlign: 'center'}} > About Us </Card.Title>
                    <Card.Text style={{textAlign: 'center'}} >
                        Made with ♡ by Alana Alfeche and Sahana Arya
                    </Card.Text>
                    <Card.Text style={{textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus ultrices in iaculis. Accumsan lacus vel facilisis volutpat est velit egestas dui. Egestas pretium aenean pharetra magna. Pellentesque dignissim enim sit amet. Sit amet tellus cras adipiscing enim eu turpis egestas. Adipiscing diam donec adipiscing tristique risus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Placerat duis ultricies lacus sed. Eget nullam non nisi est sit amet. Est placerat in egestas erat imperdiet sed euismod nisi. Id neque aliquam vestibulum morbi blandit. Cras semper auctor neque vitae tempus quam pellentesque. Massa enim nec dui nunc mattis enim ut tellus. Pretium viverra suspendisse potenti nullam ac. Tortor aliquam nulla facilisi cras fermentum. Scelerisque eleifend donec pretium vulputate sapien. Habitant morbi tristique senectus et netus et malesuada fames ac. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Nisi vitae suscipit tellus mauris a diam maecenas.
                    <br></br>
                    <br></br>
                    Nisl pretium fusce id velit ut tortor pretium viverra. Nec sagittis aliquam malesuada bibendum. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Nisl purus in mollis nunc sed id semper. Est velit egestas dui id ornare. Varius duis at consectetur lorem donec massa sapien faucibus et. Magna fermentum iaculis eu non diam. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Mi bibendum neque egestas congue. Vel pretium lectus quam id leo in vitae turpis. Ut venenatis tellus in metus vulputate eu. Dui vivamus arcu felis bibendum ut tristique et egestas. Adipiscing bibendum est ultricies integer.
                    <br></br>
                    <br></br>
                    Ante metus dictum at tempor commodo ullamcorper a. Vitae tortor condimentum lacinia quis vel eros donec ac. In hendrerit gravida rutrum quisque non. Fermentum et sollicitudin ac orci phasellus egestas. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Nulla at volutpat diam ut venenatis tellus. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Egestas sed sed risus pretium quam vulputate. Eu augue ut lectus arcu bibendum at varius vel pharetra. Duis convallis convallis tellus id interdum. Odio morbi quis commodo odio. Pellentesque diam volutpat commodo sed. Iaculis eu non diam phasellus. Lacus sed turpis tincidunt id aliquet.                    
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default About;