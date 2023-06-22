import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return(
        <div>
            Hello! I'm in a React component now!
            <button className="btn btn-primary">Here's a button</button>
            <Container>
                <h2>Everything below here is in a React Bootstrap component!</h2>
                <Button className="btn-secondary">
                    This button is a React component!!
                </Button>
                <Stack gap={2}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                </Stack>
                <Stack direction="horizontal" gap={2}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                </Stack>
            </Container>
            <Container>
                <Row className='mb-4'>
                    <Col className="bg-info border p-3">Col 1 of 2</Col>
                    <Col className="bg-info border p-3">Col 2 of 2</Col>
                </Row>
                <Row className='mb-4'>
                    <Col className="bg-info border p-3">Col 1 of 3</Col>
                    <Col className="bg-info border p-3">Col 2 of 3</Col>
                    <Col className="bg-info border p-3">Col 3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
};

export default App;