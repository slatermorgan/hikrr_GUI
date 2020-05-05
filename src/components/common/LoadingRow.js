import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoadingRow extends Component {
    render() {
        return (
            <TableRow key="loading-row">
                <TableCell>
                    <div>{
                        this.props.loading &&
                        <CircularProgress color="primary"/>
                    }</div>
                </TableCell>
            </TableRow>
        );
    }
}

export default LoadingRow