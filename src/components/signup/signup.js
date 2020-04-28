import React, {Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  inputSearch: {
    color: 'red',
  },
  inputSearch_Div : {
    width: '100vw !important',
    margin: 20,
  }
});

class SignUp extends Component {

    render()  {
        return (
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Paper />
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        login here
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper />
                </Grid>
            </Grid>
        );
    }
}

export default SignUp