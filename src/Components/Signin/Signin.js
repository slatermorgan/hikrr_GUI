import React, {Component } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Signin.css';

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
                            <h4 class="text-center">Login To Start Hiking</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button id="button-signup" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <p class="text-center"><a href="#">Forgotten Password? </a></p>
                            <p class="text-center" id="sign-up">Don't have an account? <a href="/SignUp">Sign Up</a>.</p>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default SignUp