import React, {useState} from 'react';
import styled from "styled-components";
import {Map} from "./Map.jsx"
import {useJsApiLoader} from "@react-google-maps/api";
import {mapOptions} from "./MapConfigurations.jsx";


const geofence_center ={
    lat : -12.169378,
    lng: -77.020962,
}
const geofence_radius = 70

const haversine = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Radio de la Tierra en metros
    const toRad = (value) => (value * Math.PI) / 180; // Convertir grados a radianes

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distancia en metros
};

const isWithinGeofence = (userLocation) => {
    if (!userLocation) return false;
    const distance = haversine(userLocation.lat, userLocation.lng, geofence_center.lat, geofence_center.lng);
    return distance <= geofence_radius;
};

export const PresentationSection = () => {
    const {isLoaded} = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey:mapOptions.googleMapApiKey
    });

    const [userLocation, setUserLocation] = useState(null);
    const [status, setStatus] = useState('')

    const handleGetLocation  =()=>{
        if (navigator.geolocation){
            setStatus('Fetching location...');
            console.log('Fetching location...')
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude} = position.coords;
                setUserLocation({lat:latitude,lng:longitude});
                console.log("user coords", userLocation)

                if (isWithinGeofence(userLocation)){
                    setStatus('Dentro de la geocerca')
                    console.log('Dentro de la geocerca')
                }else{
                    setStatus('Fuera de la geocerca')
                    console.log('Fuera de la geocerca')
                }

            },
                (error)=>{
                    console.error("Error al obtener la geolocalizacion: ",error)
                })
        }else{
            console.error("Su navegador no cuenta con la geolocalizacion")
        }
    }

    return (
        <Container>
                <center>
                    <ButtonAssist onClick={handleGetLocation}>
                        Marcar Asistencia
                    </ButtonAssist>

                </center>

            <Map isLoaded = {isLoaded} userLocation = {userLocation}/>


        </Container>
    );
};

const Container = styled.div`
    max-width: 80%;
    margin-left: 10%;
    margin-right: 10%;`;

const ButtonGroup = styled.div`
    
    width: 80%;
    display: inline-flex;
`;

const ButtonAssist = styled.button`
    margin: 2em;
    padding: 1em;
    border-color: blue;
    border-radius: 2em;
    background-color: white;
    color: blue;
    
    &:hover{
        background-color: blue;
        color: white;
        border-color: white;
    }
`;
