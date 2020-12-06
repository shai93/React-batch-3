import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AdvancedForm extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default AdvancedForm;