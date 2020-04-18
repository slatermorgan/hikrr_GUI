import React from 'react'

const Peaks = ({ peaks }) => {
    return (
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Height (m)</th>
                <th scope="col">Comments</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
            </tr>
        </thead>
        <tbody>
            {peaks.map((peak) => (
            <tr>
                <td>{peak.name}</td>
                <td>{peak.metres}</td>
                <td>{peak.comments}</td>
                <td>{peak.latitude}</td>
                <td>{peak.longitude}</td>
            </tr>
            ))}
        </tbody>
    </table>
    );
};

export default Peaks