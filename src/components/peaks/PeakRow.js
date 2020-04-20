import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class PeakRow extends Component {
    render() {
        if (this.props.peaks.length === this.props.index + 1) { // last peak

            return (
                <TableRow ref={this.props.lastPeakElRef} key={this.props.peak.id}>
                    <TableCell align="left">
                        {this.props.peak.name}
                    </TableCell>
                    <TableCell align="left">
                        {this.props.peak.metres}
                    </TableCell>
                    <TableCell align="left">
                        {this.props.peak.region}
                    </TableCell>
                </TableRow>
            )
        } else {

            return (
                <TableRow key={this.props.peak.id}>
                    <TableCell align="left">
                        {this.props.peak.name}
                    </TableCell>
                    <TableCell align="left">
                        {this.props.peak.metres}
                    </TableCell>
                    <TableCell align="left">
                        {this.props.peak.region}
                    </TableCell>
                </TableRow>
            )
        }
    }
}

export default PeakRow