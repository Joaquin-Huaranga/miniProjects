import React from 'react';
import {Circle, GoogleMap, Marker} from "@react-google-maps/api"
import {mapOptions} from "./MapConfigurations.jsx";
import {geofence_center,geofence_radius} from "./PresentationSection.jsx";

export const Map = (props) => {

    const {isLoaded,userLocation} = props;

    const containerStyle = {
        border: "0.5em solid black",
        borderRadius:"2em",
        width : "100%",
        height: "45em",
    };

    const instMarker = {
        lat : -12.165207,
        lng: -76.974709,
    };

    return isLoaded && (
        <>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation || geofence_center}
            zoom={18}
            options={{
                styles:mapOptions.mapTheme,
            }}
            >
            <Marker position={geofence_center}/>
            <Marker position={instMarker}/>
            <Circle
                center={geofence_center}
                radius={geofence_radius}
                options={{
                    fillColor: "rgb(38,153,227)",
                    strokeColor: "rgba(0,81,255,0.5)",
                    strokeWeight: 1.6,
                }}
            />
            {userLocation && <Marker position={userLocation}/>}
        </GoogleMap>
        </>
    );
};

