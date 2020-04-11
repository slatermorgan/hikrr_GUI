import React from 'react'

const Peaks = ({ peaks }) => {
    console.log(peaks);
    return (
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Height (m)</th>
                <th scope="col">Comments</th>
            </tr>
        </thead>
        <tbody>
            {peaks.map((peak) => (
            <tr>
                <th scope="row">1</th>
                <td>{peak.name}</td>
                <td>{peak.metres}</td>
                <td>{peak.comments}</td>
            </tr>
            ))}
        </tbody>
    </table>
    );
};

export default Peaks