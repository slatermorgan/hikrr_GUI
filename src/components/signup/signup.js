import React, {Component } from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = {
    inputSearch_Div : {
        width: '100vw !important',
        margin: 20,
    },
    login_Grid : {
        paddingTop: '0vh',
    },
    login_Div : {
        height: '25vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

class SignUp extends Component {

    render()  {
        return (
            <>
            <style type="text/css">
                {`
                    .btn-signup {
                        background-color: #b53f49;
                        width: 100%;
                        margin: 0;
                    }
                `}
            </style>
            <Grid container spacing={0} style={useStyles.login_Grid}>
                <Grid item xs={3} md={4} lg={5}>
                    <Paper />
                </Grid>
                <Grid item xs={6} md={3} lg={2}>
                    <Paper>
                        <div className="justify-content-center d-flex">
                            <h4>Create a Hikrr Account</h4>
                        </div>
                        <div style={useStyles.login_Div}>
                            <form noValidate style={useStyles.form}>
                                <div>
                                    <FormControl>
                                        <InputLabel htmlFor="component-username">Username</InputLabel>
                                        <Input type="text" id="component-username"/>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl>
                                        <InputLabel htmlFor="component-password">Password</InputLabel>
                                        <Input type="password" id="component-password"/>
                                    </FormControl>
                                </div>
                            </form>
                        </div>
                        <div className="justify-content-center d-flex">
                            <small className="text-muted">Already have an account?</small>
                        </div>
                        <div className="justify-content-center d-flex">
                            <small><a href="/signin">Sign in</a></small>
                        </div>
                    </Paper>
                    <Button
                                    className="mt-2"
                                    variant="signup"
                                    onClick={() => this.navigate('/signup') }
                                >
                                    Sign Up
                                </Button>
                </Grid>
                <Grid item xs={3} md={4} lg={5}>
                    <Paper />
                </Grid>
            </Grid>
            </>
        );
    }
}

export default SignUp