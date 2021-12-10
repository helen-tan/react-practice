import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from "react-map-gl";
import { FaMapMarkerAlt } from 'react-icons/fa'
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

const PARIS = {
    lat: 48.8566,
    lng: 2.3522,
}

const navControlStyle= {
    right: 10,
    top: 10
  };

  const fullscreenControlStyle= {
    right: 10,
    top: 100
  };

const Map = ({ flats, selectedFlat, setSelectedFlat }) => {
    console.log(flats);

    const accessToken = 
    "pk.eyJ1IjoiaGVsZW4tdGFuLW16IiwiYSI6ImNrdXYya2ludjA2N2kycHJmM2RxdTYwMmUifQ.JoDUdQbqD62h-AN4hIAwQw";

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100vh",
        latitude: PARIS.lat,
        longitude: PARIS.lng,
        zoom: 11
    });

    useEffect(() => {
        if(selectedFlat){
            setViewport({
                latitude: selectedFlat.lat,
                longitude: selectedFlat.lng,
                zoom: 15,
            });
        } else {
            setViewport({
                latitude: PARIS.lat,
                longitude: PARIS.lng,
                zoom: 11,
            });
        }
    }, [selectedFlat]);

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={accessToken}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            {flats.map((flat) => {
                return(
                    <Marker key={flat.id} latitude={flat.lat} longitude={flat.lng} onClick={() => setSelectedFlat(flat)}>
                        <FaMapMarkerAlt color="var(--primary-purple)" size="1.5em"/>
                    </Marker>
                );
            })}
            {/*
            <Popup latitude={PARIS.lat} longitude={PARIS.lng}>
                <div className="popup">
                    <div className="price">€500</div>
                    <div className="name"> Heart of paris</div>
                </div>
            </Popup>
            */}

            {/*Conditionally render popup only when there is a selectedFlat*/}
            {selectedFlat && (
                <Popup latitude={selectedFlat.lat} longitude={selectedFlat.lng} closeOnClick={true} onClose={()=> setSelectedFlat(null)}>
                    <div className="popup">
                        <div className="price">€{selectedFlat.price}</div>
                        <div className="name">{selectedFlat.name}</div>
                    </div>
                </Popup>
            )};

        <NavigationControl style={navControlStyle} />

        <FullscreenControl style={fullscreenControlStyle} />
            
        </ReactMapGL>
    );
};

export default Map;