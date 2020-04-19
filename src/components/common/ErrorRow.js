import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ErrorRow = (options) => {
    const error = options.error;

        return (
        <TableRow key="error-row">
            <TableCell>{error && 'Error'}</TableCell>
        </TableRow>
    );
}

export default ErrorRow