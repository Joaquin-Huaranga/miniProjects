import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Map} from "./Map.jsx"
import {useJsApiLoader} from "@react-google-maps/api";
import {mapOptions} from "./MapConfigurations.jsx";
import {Table} from "./Table.jsx";

//(MIO) CONSTANTE CON DATOS SOBRE LAS COORDENADAS Y RADIO DE LA GEOCERCA
const geofence_center ={
    lat : -12.169378,
    lng: -77.020962,
}
const geofence_radius = 60

//FÓRMULA PARA HALLAR LA DISTANCIA ENTRE DOS PUNTOS GEOGRÁFICOS
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

//CONSTANTE PARA COMPROBAR SI LA UBICACION DEL USUARIO ESTÁ DENTRO DE LA GEOCERCA
const isWithinGeofence = (userLocation) => {
    if (!userLocation) return false;
    const distance = haversine(userLocation.lat, userLocation.lng, geofence_center.lat, geofence_center.lng);
    return distance <= geofence_radius;
};

//COMPONENTE PRINCIPAL
export const PresentationSection = () => {
    const {isLoaded} = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey:mapOptions.googleMapApiKey
    });

    const [userLocation, setUserLocation] = useState(null);
    const [isInGeofence, setIsInGeofence] = useState(false);
    const [attendanceData, setAttendanceData] = useState({
        entries: Array(7).fill(null),
        exits: Array(7).fill(null),
        totals: Array(7).fill(null),
        lunches: Array(7).fill(null),
        totalTime:'',
        totalMinutes:'',
        totalLunch:''
    });

    const [status, setStatus] = useState('')
    const [time,setTime] = useState(0)
    const [intervalId,setIntervalId] = useState(null)

    //FUNCION PARA CONSEGUIR LA UBICACION DE USUARIO
    const handleGetLocation  =()=>{
        if (navigator.geolocation){
            setStatus('Buscando ubicacion...');
            console.log('Buscando ubicacion...')
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude} = position.coords;
                setUserLocation({lat:latitude,lng:longitude});

            },
                (error)=>{
                    console.error("Error al obtener la geolocalizacion: ",error)
                })
        }else{
            console.error("Su navegador no cuenta con la geolocalizacion")
        }
    }

    //PARA AGREGAR LA HORA A LA TABLA
    const handleMarkAttendance = ()=>{
        const currentHour = new Date().toLocaleDateString([],{hour:'2-digit',minute: '2-digit'});
        const dayIndex = new Date().getDay();
        const newEntries = [...attendanceData.entries];
        newEntries[dayIndex] = currentHour;

        setAttendanceData(prevData => ({
            ...prevData,
            entries: newEntries
        }))
    }

    const handleExitAttendance = ()=>{
        const currentHour = new Date().toLocaleDateString([],{hour:'2-digit',minute: '2-digit'});
        const dayIndex = new Date().getDay();
        const newExits = [...attendanceData.exits];
        newExits[dayIndex] = currentHour;

        setAttendanceData(prevData => ({
            ...prevData,
            exits: newExits
        }))
    }

    const handleButtonClick = ()=>{

        handleGetLocation()
        handleMarkAttendance()
    }

    //USO DE EFECTO DEPENDIENDO DE SI EL USUARIO ESTÁ DENTRO O NO DE LA GEOCERCA
    useEffect(() => {
        if (userLocation) {
            const withinGeofence = isWithinGeofence(userLocation);
            setIsInGeofence(withinGeofence);
            setStatus(withinGeofence ? 'Acceso Correcto' : 'Fuera del rango');
            console.log("user coords", userLocation)
        }
    }, [userLocation]);

    //EFECTO PARA COMENZAR LA CUENTA DEL CRONOMETRO SOLO SI EL USUARIO SE MANTIENE DENTRO DE LA GEOCERCA
    useEffect(() => {
        if (isInGeofence) {
            // Iniciar el cronómetro
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id);
        } else {
            // Detener el cronómetro si el usuario sale de la geocerca
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }

        return () => {
            // Limpiar el intervalo al desmontar el componente
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isInGeofence]);



    return (
        <Container>
                <center>
                    <ButtonGroup>
                    <ButtonAssist onClick={handleButtonClick}>
                        Marcar Asistencia
                    </ButtonAssist>
                    <StatusMessage><p>{status}</p></StatusMessage>
                    <ButtonExit onClick={handleExitAttendance}>
                        Marcar Salida
                    </ButtonExit>
                    </ButtonGroup>
                    {isInGeofence && <Timer><p>beta</p>{time} segundos</Timer>}
                </center>
            <Map isLoaded = {isLoaded} userLocation = {userLocation}/>

            <Table attendanceData={attendanceData}/>
        </Container>
    );
};

const Container = styled.div`
    max-width: 80%;
    margin-left: 10%;
    margin-right: 10%;
`;

const ButtonGroup = styled.div`
    margin: 2em;
`;


const ButtonAssist = styled.button`

    padding: 1em;
    font-size: 1.4em;
    font-weight: bolder;
    font-family: "Bell MT";
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

const ButtonExit = styled.button`
    padding: 1em;
    font-size: 1.4em;
    font-weight: bolder;
    font-family: "Bell MT";
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
const Timer = styled.div`
    margin: 1em;
    font-size: 1.5em;
    color: white;
`;
const StatusMessage = styled.button`
    
    width: 16.5%;
    border: 0.3em solid black;
    background-color: white;
    border-radius: 2em;
    padding: 1em;
    margin: 1em;
    color: black;
    p{
        font-size: 1.4em;
        font-weight: bold;
        font-family: "Bell MT";
    }

`;
