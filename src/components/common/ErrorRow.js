import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class ErrorRow extends Component {
    render() {
        return (
            <TableRow key="error-row">
                <TableCell>{this.props.error && 'Error'}</TableCell>
            </TableRow>
        );
    }
}

export default ErrorRow