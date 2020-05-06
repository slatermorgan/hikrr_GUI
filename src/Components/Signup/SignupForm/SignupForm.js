import React, {Component } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SignupForm.css';

class SignUp extends Component {

    render()  {
        return (
                <Container id="box">
                    <Row>
                        <Col>
                            <h4 class="text-center">Start Hiking Today</h4>
                            <Form>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Button id="button-signup" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                            <div class="text-center">
                            <p>
                                Already have an account?
                                <a href="/Login"> Log in</a>
                            </p>
                            <medium>
                                Please use a password unique to Hikrr
                            </medium>
                            <p id="disclaimer">
                                By creating an account you are accepting our
                                <a href="#"> Terms of Service</a> and
                                <a href="#"> Privacy Policy</a>.
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default SignUp