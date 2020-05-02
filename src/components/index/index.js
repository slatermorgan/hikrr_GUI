import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Index extends Component {

    navigate(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <>
                <style type="text/css">
                    {`
                    .btn-signup {
                        background-color: #b53f49;
                    }

                    .btn-browse {
                        background-color: #b53f49;
                    }
                    #jumbotron-main {
                        background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
                        background: rgba(204, 204, 204, 0);
                        color: white;
                    }
                    .paragraphText {
                        font-size: 1.5rem;
                        color: white;
                    }
                    #title {
                        color: white;
                    }
                    #div-btns {
                        margin-top: 10vh;
                    }
                    `}
                </style>
                <Row className="">
                    <Col lg="0"></Col>
                    <Col lg="4">
                        <Jumbotron id="jumbotron-main">
                            <h1 id="title">Welcome to Hikrr</h1>
                            <p className="paragraphText">
                                Beautiful mountains don't need to be hard to find. Our goal is simple - build the largest collection of mountains to climb, so you can explore the outdoors with confidence.
                            </p>
                            <div id="div-btns">
                                <Button
                                    className="m-2"
                                    variant="signup"
                                    onClick={() => this.navigate('/signup') }
                                >
                                    Sign Up
                                </Button>
                                <Button
                                    className="m-2"
                                    variant="browse"
                                    onClick={() => this.navigate('/peaks') }
                                >
                                    Browse Our Peaks
                                </Button>
                            </div>
                        </Jumbotron>
                    </Col>
                    <Col lg="8"></Col>
                </Row>
            </>

        );
    }
};

export default Index