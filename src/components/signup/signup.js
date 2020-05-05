import React, {Component } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Signup.css';

const useStyles = {
    inputSearch: {
        color: 'red',
    },
    inputSearch_Div : {
        width: '100vw !important',
        margin: 20,
    },
    login_Grid : {
        paddingTop: '100px',
    },
    login_Div : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

class SignUp extends Component {

    render()  {
        return (
                <Container id="box">
                    <Row>
                        <Col>
                            <h4 class="text-center">Start Hiking Today</h4>
                            <Form>
                                <Form.Group class="input-field" >
                                    <Form.Control class="input-field" type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group class="input-field" >
                                    <Form.Control class="input-field" type="text" placeholder="Last Name" />
                                </Form.Group>

                                <Form.Group class="input-field" controlId="formBasicEmail">
                                    <Form.Control class="input-field" type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group class="input-field" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button id="button-signup" variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                            <p class="text-center">Already have an account? <a href="#">Log in</a></p>
                            <p id="disclaimer">By creating an account you are accepting our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. We may occasionally send you emails with product updates, and you can unsubscribe at any time.</p>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default SignUp