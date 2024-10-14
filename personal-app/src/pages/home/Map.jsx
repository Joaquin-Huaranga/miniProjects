import React from 'react';
import {Circle, GoogleMap, Marker} from "@react-google-maps/api"
import {mapOptions} from "./MapConfigurations.jsx";


export const Map = (props) => {

    const {isLoaded,userLocation} = props;

    const containerStyle = {
        border: "0.5em solid black",
        borderRadius:"2em",
        width : "100%",
        height: "45em",
    };

    const center = {
        lat : -12.169378,
        lng: -77.020962,
    };

    const instMarker = {
        lat : -12.165207,
        lng: -76.974709,
    };

    const geocerca = {
        center: center, // Centro de la geocerca
        radius: 60, // Radio en metros
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
            center={userLocation || center}
            zoom={18}
            options={{
                styles:mapOptions.mapTheme,
            }}
            >
            <Marker position={center}/>
            <Marker position={instMarker}/>
            <Circle
                center={geocerca.center}
                radius={geocerca.radius}
                options={{
                    fillColor: "rgb(38,153,227)",
                    strokeColor: "rgba(0,81,255,0.5)",
                    strokeWeight: 1.6,
                }}
            />
            {markers.map((marker) => (
                <Marker key={marker.name} position={marker.location} />
            ))}
            {userLocation && <Marker position={userLocation}/>}
        </GoogleMap>
        </>
    );
};

