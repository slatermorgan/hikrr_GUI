import React from 'react'
import {
  BrowserRouter,
  useParams
} from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputSearch: {
    color: 'red',
  },
  inputSearch_Div : {
    width: '100vw !important',
    margin: 20,
  }
});


const Peak = () => {
    const classes = useStyles();
    let { id } = useParams();
    return (
        <Grid container>
            <Grid item xs={0} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
                <Paper className={classes.paper}>
                    <h3>ID: {id}</h3>
                </Paper>
            </Grid>
            <Grid item xs={0}  lg={3}></Grid>
        </Grid>
  );
}

export default Peak;