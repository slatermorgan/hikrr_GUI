import React from 'react'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Index = () => {
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
                .jumbotron {
                    opacity: 0;
                }
                #paragraphText {
                    width: 28%;
                    font-size: 1.5rem;
                }
                `}
            </style>
            <Jumbotron>
                <h1>Welcome to Hikrr</h1>
                <p id="paragraphText">
                    The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection mountain trails, so you can explore the outdoors with confidence. While on the move.
                </p>
                <p>
                    <Button className="m-2" variant="signup">Sign Up</Button>
                    <Button className="m-2" variant="browse">Browse Our Peaks</Button>
                </p>
            </Jumbotron>
        </>

    );
};

export default Index