import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 52, lng: 4}}
        >

        </GoogleMap>
    )
};

const wrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;