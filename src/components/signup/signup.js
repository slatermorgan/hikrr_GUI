import React, {Component } from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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
            <Grid container spacing={5} style={useStyles.login_Grid}>
                <Grid item xs={2} md={3}>
                    <Paper />
                </Grid>
                <Grid item xs={8} md={6}>
                    <Paper>
                        <div style={useStyles.login_Div}>
                            <form noValidate>
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
                    </Paper>
                </Grid>
                <Grid item xs={2} md={3}>
                    <Paper />
                </Grid>
            </Grid>
        );
    }
}

export default SignUp