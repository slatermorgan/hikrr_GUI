import React, {Component } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SignupForm.css';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
    }

    redirectToLogin = () => {
        console.log('redirectToLogin');
        this.props.updateTitle('Sign in')
        this.props.history.push('/signin');
    }

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

                                <Form.Group>
                                    <Form.Control
                                        id="username"
                                        type="username"
                                        placeholder="Username"
                                        value={this.props.state.username}
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        value={this.props.state.password}
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={this.props.state.password}
                                        onChange={this.props.handleChange}
                                    />
                                </Form.Group>
                                <Button
                                    id="button-signup"
                                    type="submit"
                                    onClick={this.props.handleSubmitClick}
                                >
                                    Sign Up
                                </Button>
                            </Form>

                            <div class="text-center">
                            <div
                                className="alert alert-success mt-2"
                                style={{display: this.props.state.successMessage ? 'block' : 'none' }} role="alert">
                                {this.props.state.successMessage}
                            </div>
                            <div className="mt-2">
                                <span>Already have an account? </span>
                                <span
                                    className="loginText"
                                    onClick={() =>
                                    this.redirectToLogin()
                                }
                                >
                                    Login here
                                </span>
                            </div>
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

export default SignUpForm