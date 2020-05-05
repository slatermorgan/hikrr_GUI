import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Index.css';

class Index extends Component {

    constructor(props) {
        super(props);
        this.that= this;
    }

    navigate(path) {
        this.that.props.history.push(path);
    }

    render() {
        return (
            <>
                <Row className="">
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