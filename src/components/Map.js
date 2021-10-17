import React, { useState } from 'react';
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

const PARIS = {
    lat: 48.8566,
    lng: 2.3522,
}

const Map = (props) => {
    const accessToken = 
    "pk.eyJ1IjoiaGVsZW4tdGFuLW16IiwiYSI6ImNrdXYya2ludjA2N2kycHJmM2RxdTYwMmUifQ.JoDUdQbqD62h-AN4hIAwQw";

    const [viewport, setViewport] = useState({
        latitude: PARIS.lat,
        longitude: PARIS.lng,
        zoom: 11
    });

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={accessToken}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
        />
    );
};

export default Map;