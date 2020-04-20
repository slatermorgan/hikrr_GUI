import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const PeakRow = (options) => {
    const peak = options.peak;
    const peaks = options.peaks;
    const lastPeakElRef = options.lastPeakElRef;
    console.log(options);

    if (peaks.length === index + 1) { // last peak

        return (
            <TableRow ref={lastPeakElRef} key={peak.id}>
                <TableCell align="left">
                    {peak.name}
                </TableCell>
                <TableCell align="left">
                    {peak.metres}
                </TableCell>
                <TableCell align="left">
                    {peak.region}
                </TableCell>
            </TableRow>
        )
    } else {

        return (
            <TableRow key={peak.id}>
                <TableCell align="left">
                    {peak.name}
                </TableCell>
                <TableCell align="left">
                    {peak.metres}
                </TableCell>
                <TableCell align="left">
                    {peak.region}
                </TableCell>
            </TableRow>
        )
    }
}

export default PeasRow