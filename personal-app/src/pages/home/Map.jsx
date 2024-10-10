import React from 'react';
import {GoogleMap, Marker} from "@react-google-maps/api"

export const Map = (props) => {
    const {isLoaded} = props;

    const containerStyle = {
        border: "0.3em solid black",
        borderRadius:"2em",
        width : "100%",
        height: "40em",
    };

    const center = {
        lat: -12.169421,
        lng: -77.020988,
    };
    return isLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            >
            <Marker position={center}/>

        </GoogleMap>
    );
};

