import React from 'react';
import {GoogleMap, Marker} from "@react-google-maps/api"
import {mapOptions} from "./MapConfigurations.jsx";

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

    const anotherMarker = {
        lat : -12.165207,
        lng: -76.974709,
    };

    const markers = [
        {name:"station-1",
            location:{
                lat: -12.207239,
                lng: -76.933328
            }
        },
        {name:"station-2",
            location:{
                lat: -12.195987,
                lng: -76.940148
            }
        },
        {name:"station-3",
            location:{
                lat: -12.182457,
                lng: -76.946869
            }
        },
        {name:"station-4",
            location:{
                lat: -12.169096,
                lng: -76.950360
            }
        },
    ]
    return isLoaded && (
        <>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            options={{
                styles:mapOptions.mapTheme,
            }}
            >
            <Marker position={center}/>
            <Marker position={anotherMarker}/>

        </GoogleMap>
        </>
    );
};

