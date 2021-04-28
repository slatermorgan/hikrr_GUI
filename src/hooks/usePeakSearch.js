import { useEffect, useState } from "react"
import axios from 'axios';

export default function usePeakSearch(search, take, skip) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [peaks, setPeaks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setPeaks([])
    }, [search])

    useEffect(() => {
        setLoading(true);
        setError(false);
        // TODO: debug this I feel it doesnt work
        const CancelToken = axios.CancelToken;
        let cancel;
        axios({
            method: 'GET',
            url: process.env.REACT_APP_HIKRR_API + '/peaks',
            params: {
                search: search,
                take: take,
                skip: skip
            },
            cancelToken: new CancelToken(c => {
                cancel = c;
            })
        })
        .then(res => {
            setPeaks(prevPeaks => {
                return [...prevPeaks, ...res.data]
            });
            setHasMore(res.data.length);
            setLoading(false);
        }).catch(error => {
            if (axios.isCancel(error)) return;
            setError(true);
        })

        return () => cancel()
    }, [search, take, skip]);

    return { loading, error, peaks, hasMore};
}