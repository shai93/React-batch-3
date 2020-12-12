import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AdvancedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            select: "",
            comments: "",
            invalid: true
        }
    }

    handleElements = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })


    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    componentDidUpdate() {
        let isvalid = true;

        if (!this.state.username) {
            isvalid = false
        }

        if (!this.state.email) {
            isvalid = false
        }

        if (!this.state.select) {
            isvalid = false
        }

        if (!this.state.comments) {
            isvalid = false
        }

        // when all fields are not empty and form is not valid
        if (isvalid && this.state.invalid) {
            this.setState({
                invalid: false
            })
        } else if (!isvalid && !this.state.invalid) {      
            //when some field are empty and form is valid
            this.setState({
                invalid: true
            })
        }
    }

    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="username" placeholder="name" value={this.state.username} onChange={this.handleElements} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} placeholder="name@.com" onChange={this.handleElements} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> select</Form.Label>
                                <Form.Control as="select" name="select" value={this.state.select} onChange={this.handleElements}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as="textarea" rows={3} name="comments" value={this.state.comments} onChange={this.handleElements} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={this.state.invalid}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AdvancedForm;