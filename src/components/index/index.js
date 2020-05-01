import React from 'react'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Index = () => {
    return (
        <>
            <style type="text/css">
                {`
                .btn-signup {
                    background-color: #94420c;
                }

                .btn-browse {
                    background-color: #27940c;
                }
                `}
            </style>
            <Jumbotron>
                <h1>Welcome to Hikrr</h1>
                <p>
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