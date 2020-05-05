import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withRouter } from 'react-router'

class PeakRow extends Component {

    constructor(props) {
        super(props);
    }

    peakGetOne(history, id) {
        let path = '/peaks/' + id.toString()
        history.push(path);
    }

    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/home');
    }

    navigate(path) {
        this.props.router.push(path);
    }

    render() {
        const history = this.props.history;
        if (this.props.peaks.length === this.props.index + 1) { // last peak

            return (
                <TableRow onClick={() => this.peakGetOne(history, this.props.peak.id) } ref={this.props.lastPeakElRef} key={this.props.peak.id}>
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
                <TableRow onClick={() => this.peakGetOne(history, this.props.peak.id) } key={this.props.peak.id}>
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
export default withRouter(PeakRow)