import React, {useState, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import usePeakSearch from '../hooks/usePeakSearch';

const useStyles = makeStyles({
  inputSearch: {
    color: 'red',
  },
  inputSearch_Div : {
    width: '100vw !important',
    margin: 20,
  }
});

const Peaks = () => {
    const classes = useStyles();

    const[search, setSearch] = useState('');
    const[take, setTake] = useState(50);
    const[skip, setSkip] = useState(0);

    const {
        peaks,
        hasMore,
        loading,
        error
    } = usePeakSearch(search, take, skip);

    const observer = useRef();
    const lastPeakElRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setSkip(prevSkip => prevSkip + 50);
                }
        });

        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    function handleSearch(e) {
        setSearch(e.target.value)
        setTake(50)
        setSkip(1)
    }

    return (

    <TableContainer component={Paper}>
        <div className={classes.inputSearch_Div}>
            <form className={classes.inputSearch} noValidate autoComplete="off">
                <TextField
                    id="outlined-basic"
                    value={search}
                    label="Peak Search"
                    variant="outlined"
                    style={{width: '95%'}}
                    onChange={handleSearch}
                />
            </form>
        </div>

        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Peak Name</TableCell>
                    <TableCell align="right">Height (m)</TableCell>
                    <TableCell align="right">Region</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {peaks.map((peak, index) =>
                    {
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
                )}
                <TableRow key="loading-row">
                    <TableCell>{loading && 'Loading...'}</TableCell>
                </TableRow>
                <TableRow key="error-row">
                    <TableCell>{error && 'Error'}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>

    );
};

export default Peaks