import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingRow = (options) => {
    const loading = options.loading;

    return (
        <TableRow key="loading-row">
            <TableCell>
                <div>{
                    loading &&
                    <CircularProgress color="primary"/>
                }</div>
            </TableCell>
        </TableRow>
    );
}

export default LoadingRow